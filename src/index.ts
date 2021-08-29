import { TodoItem } from './todoItem';
import { TodoCollection } from './todoCollection';

const todos: Array<TodoItem> = [
  new TodoItem(1, 'Buy Flowers'),
  new TodoItem(2, 'Get Shoes'),
  new TodoItem(3, 'Collect Tickets'),
  new TodoItem(4, 'Call Joe', true),
]

const collection: TodoCollection = new TodoCollection('Adam', todos);

console.clear();

console.log(`${collection.userName}'s Todo List`);

const newId: number = collection.addTodo('Go for a run');

const todoItem: TodoItem = collection.getTodoById(newId);

todoItem.printDetails();

// collection.addTodo(todoItem);
