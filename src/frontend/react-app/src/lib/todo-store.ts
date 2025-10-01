import { create } from "zustand";

interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  dueDate?: Date;
}

interface TodoListState {
  todos: TodoItem[];
  filter: "all" | "active" | "completed";
  loading?: boolean;
  error?: string | null;
  addTodo: (todo: TodoItem) => void;
  deleteTodo: (todoId: string) => void;
  toggleTodoCompletion: (todoId: string) => void;
  updateTodo: (
    todoId: string,
    updatedFields: Partial<Omit<TodoItem, "id" | "createdAt">>
  ) => void;
  setFilter: (filter: "all" | "active" | "completed") => void;
  clearCompleted: () => void;
}

export const useTodoStore = create<TodoListState>((set, get) => ({
  todos: [],
  filter: "all",
  loading: false,
  error: null,

  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),

  deleteTodo: (todoId) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoId),
    })),

  toggleTodoCompletion: (todoId) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    })),

  updateTodo: (todoId, updatedFields) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, ...updatedFields } : todo
      ),
    })),

  setFilter: (filter) => set(() => ({ filter })),

  clearCompleted: () =>
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.completed),
    })),
}));
