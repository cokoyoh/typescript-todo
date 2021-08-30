import { TodoItem } from './todoItem';
import { TodoCollection } from './todoCollection';
import * as inquirer from 'inquirer'

const todos: Array<TodoItem> = [
  new TodoItem(1, 'Buy Flowers'),
  new TodoItem(2, 'Get Shoes'),
  new TodoItem(3, 'Collect Tickets'),
  new TodoItem(4, 'Call Joe', true),
]

const collection: TodoCollection = new TodoCollection('Adam', todos);

const displayTodoList = (): void => {
  console.log(`${collection.userName}'s Todo List  (${collection.getItemCounts().imcomplete} items to do)`);
  collection.getTodoItems(true).forEach(item => item.printDetails());
}

enum Commands {
  Quit = 'Quit',
  Completed = 'Show/Hide completed'
}

const promptUser = (): void => {
  console.clear();

  displayTodoList();

  inquirer.prompt({
    type: 'list',
    name: 'command',
    message: 'Choose option',
    choices: Object.values(Commands)
  }).then(answers => {
    if (answers['command'] !== Commands.Quit) {
      promptUser();
    }
  })
}

promptUser();
