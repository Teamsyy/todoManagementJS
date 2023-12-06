const Todo = require("./todo.js");
function todoManagement() {
  let todos = [];

  function addTodo(id, desc, done) {
    todos.push(new Todo(id, desc, done));
    return todos[todos.length - 1].id;
  }
  function clearTodo() {
    todos = [];
  }

  function removeTodo(removeId) {
    todos = todos.filter((todo) => todo.id !== removeId);
  }

  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId);
  }

  function getTodos(params) {
    return todos;
  }

  function findIndexTodo(searchId) {
    return todos.findIndex((todo) => todo.id === searchId);
  }

  function getNumberOfDone() {
    return todos.filter((todo) => todo.done === true).length;
  }

  function getNumberOfNotDone() {
    return todos.filter((todo) => todo.done === false).length;
  }

  function loadTodos(userTodos) {
    // todos = [...userTodos]
    Todo.setRunningId(userTodos[userTodos.length - 1].id + 1);

    userTodos.forEach((todo) => {
      addTodo(todo.id, todo.description, todo.done);
    });
  }
  return {
    addTodo,
    findTodo,
    removeTodo,
    findIndexTodo,
    getTodos,
    clearTodo,
    loadTodos,
    getNumberOfDone,
    getNumberOfNotDone,
  };
}

module.exports = todoManagement;

const todos = todoManagement();
todos.addTodo(1, "Buy groceries", false);
todos.addTodo(2, "Do laundry", false);
todos.addTodo(3, "Walk the dog", false);

const remove = todos.removeTodo(2);
console.log(todos.getTodos());
console.log(todos.getNumberOfDone());
console.log(todos.getNumberOfNotDone());
todos.clearTodo();
todos.getTodos();
