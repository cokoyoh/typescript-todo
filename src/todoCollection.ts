import { TodoItem } from './todoItem'

export class TodoCollection {
  private nextId: number = 1;
  private itemMap = new Map<number, TodoItem>();

  constructor(public userName: string, public todoItems: Array<TodoItem>) {
    todoItems.forEach(item => this.itemMap.set(item.id, item));
  }

  getTodoById(id: number): TodoItem {
    return this.itemMap.get(id);
  }

  addTodo(task: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }

    this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));

    return this.nextId;
  }

  getTodoItems(includeComplete: boolean): Array<TodoItem> {
    return [...this.itemMap.values()]
      .filter(item => includeComplete || !item.complete);
  }

  markComplete(id: number, complete: boolean) {
    const todoItem = this.getTodoById(id);

    if (todoItem) {
      todoItem.complete = complete;
    }
  }
}
