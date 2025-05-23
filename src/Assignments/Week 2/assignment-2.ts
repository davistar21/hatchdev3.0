class Task {
  constructor(
    public id: number,
    public title: string,
    public completed: boolean = false
  ) {}
}

class TaskManager {
  private tasks: Task[] = [];
  private nextId: number = 1;

  createTask(title: string): void {
    const task = new Task(this.nextId++, title);
    this.tasks.push(task);
    console.log(`Task "${title}" created with ID ${task.id}`);
  }

  completeTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = true;
      console.log(`Task "${task.title}" marked as complete`);
    } else {
      console.log(`Task not found`);
    }
  }

  updateTask(id: number, newTitle: string): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.title = newTitle;
      console.log(`Task ${id} updated to "${newTitle}"`);
    } else {
      console.log(`Task not found`);
    }
  }

  listTasks(): void {
    this.tasks.forEach(task =>
      console.log(`${task.id}. ${task.title} - ${task.completed ? "Done" : "Pending"}`)
    );
  }
}

const manager = new TaskManager();
manager.createTask("Write assignment");
manager.createTask("Review PR");
manager.listTasks();
manager.updateTask(1, "Write TypeScript assignment");
manager.completeTask(2);
manager.listTasks();
