import { TodoItem } from './todoItem'

export class TodoCollection {
  private nextId: number = 1;

  constructor(public userName: string, public todoItems: Array<TodoItem>) {
    // no statement required
  }

  getTodoById(id: number): TodoItem {
    return this.todoItems.find(item => item.id === id);
  }

  addTodo(task: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }

    this.todoItems.push(new TodoItem(this.nextId, task));

    return this.nextId;
  }

  markComplete(id: number, complete: boolean) {
    const todoItem = this.getTodoById(id);

    if (todoItem) {
      todoItem.complete = complete;
    }
  }
}
