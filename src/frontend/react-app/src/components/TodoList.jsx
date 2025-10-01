import React, { useState } from "react";
import { useTodoStore } from "../lib/todo-store"; // adjust path if needed
import { nanoid } from "nanoid"; // for unique IDs, install with `npm install nanoid`

export default function TodoList() {
  const {
    todos,
    filter,
    addTodo,
    deleteTodo,
    toggleTodoCompletion,
    updateTodo,
    setFilter,
    clearCompleted,
  } = useTodoStore();

  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  // Filter todos based on current filter state
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  // Handle adding a new todo
  const handleAddTodo = () => {
    const trimmed = newTodoTitle.trim();
    if (!trimmed) return;
    addTodo({
      id: nanoid(),
      title: trimmed,
      completed: false,
      createdAt: new Date(),
    });
    setNewTodoTitle("");
  };

  // Handle pressing Enter in input box
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (editingId !== null) {
        handleSaveEdit(editingId);
      } else {
        handleAddTodo();
      }
    }
  };

  // Start editing a todo
  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditingText(todo.title);
  };

  // Save edited todo
  const handleSaveEdit = (id) => {
    const trimmed = editingText.trim();
    if (!trimmed) {
      // If empty, delete todo
      deleteTodo(id);
    } else {
      updateTodo(id, { title: trimmed });
    }
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>

      {/* Input to add new todo */}
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Add a new todo"
          value={editingId === null ? newTodoTitle : editingText}
          onChange={(e) =>
            editingId === null
              ? setNewTodoTitle(e.target.value)
              : setEditingText(e.target.value)
          }
          onKeyDown={handleKeyDown}
          autoFocus
        />
        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 rounded-r"
          onClick={() =>
            editingId === null ? handleAddTodo() : handleSaveEdit(editingId)
          }
        >
          {editingId === null ? "Add" : "Save"}
        </button>
      </div>

      {/* Filter buttons */}
      <div className="flex justify-center space-x-4 mb-4 text-sm">
        {["all", "active", "completed"].map((f) => (
          <button
            key={f}
            className={`px-3 py-1 rounded ${
              filter === f
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-indigo-300"
            }`}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Todo items list */}
      <ul className="divide-y divide-gray-200">
        {filteredTodos.length === 0 && (
          <li className="text-center text-gray-500 py-4">
            No todos to display.
          </li>
        )}
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-3 flex-grow">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodoCompletion(todo.id)}
                className="w-5 h-5 text-indigo-600 rounded"
              />
              {editingId === todo.id ? (
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onBlur={() => handleSaveEdit(todo.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSaveEdit(todo.id);
                    if (e.key === "Escape") setEditingId(null);
                  }}
                  className="flex-grow border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  autoFocus
                />
              ) : (
                <span
                  onDoubleClick={() => startEditing(todo)}
                  className={`flex-grow cursor-pointer ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-900"
                  }`}
                >
                  {todo.title}
                </span>
              )}
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700 ml-4"
              aria-label={`Delete todo ${todo.title}`}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>

      {/* Clear completed button */}
      {todos.some((todo) => todo.completed) && (
        <button
          onClick={clearCompleted}
          className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded"
        >
          Clear Completed
        </button>
      )}
    </div>
  );
}
