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

let showCompleted = true;

const displayTodoList = (): void => {
  console.log(`${collection.userName}'s Todo List  (${collection.getItemCounts().imcomplete} items to do)`);
  collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}

enum Commands {
  Toggle = 'Show/Hide Completed',
  Quit = 'Quit',
}

const promptUser = (): void => {
  console.clear();

  displayTodoList();

  inquirer.prompt({
    type: 'list',
    name: 'command',
    message: 'Choose option',
    choices: Object.values(Commands),
  }).then(answers => {
    switch (answers['command']) {
      case Commands.Toggle:
        showCompleted = !showCompleted;
        promptUser();
        break;
    }
  })
}

promptUser();
