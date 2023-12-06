const todoManagement = require("./todoManagement");

// Test addTodo function
test("addTodo should add a new todo to the list", () => {
  const todos = todoManagement();
  const id = todos.addTodo(1, "Buy groceries", false);
  expect(id).toBe(1);
  expect(todos.getTodos()).toHaveLength(1);
});

// Test removeTodo function
test("removeTodo should remove a todo from the list", () => {
  const todos = todoManagement();
  todos.addTodo(1, "Buy groceries", false);
  todos.addTodo(2, "Do laundry", false);
  todos.addTodo(3, "Walk the dog", false);
  const removedTodos = todos.removeTodo(2);
  expect(removedTodos).toHaveLength(2);
  expect(todos.getTodos()).toHaveLength(2);
});

// Test findTodo function
test("findTodo should find a todo by its id", () => {
  const todos = todoManagement();
  todos.addTodo(1, "Buy groceries", false);
  todos.addTodo(2, "Do laundry", false);
  todos.addTodo(3, "Walk the dog", false);
  const todo = todos.findTodo(2);
  expect(todo).toEqual({ id: 2, description: "Do laundry", done: false });
});

// Test findIndexTodo function
test("findIndexTodo should find the index of a todo by its id", () => {
  const todos = todoManagement();
  todos.addTodo(1, "Buy groceries", false);
  todos.addTodo(2, "Do laundry", false);
  todos.addTodo(3, "Walk the dog", false);
  const index = todos.findIndexTodo(2);
  expect(index).toBe(1);
});

// Test clearTodo function
test("clearTodo should clear the list of todos", () => {
  const todos = todoManagement();
  todos.addTodo(1, "Buy groceries", false);
  todos.addTodo(2, "Do laundry", false);
  todos.addTodo(3, "Walk the dog", false);
  todos.clearTodo();
  expect(todos.getTodos()).toHaveLength(0);
});

// Test loadTodos function
test("loadTodos should load todos from an array", () => {
  const todos = todoManagement();
  const userTodos = [
    { id: 1, description: "Buy groceries", done: false },
    { id: 2, description: "Do laundry", done: false },
    { id: 3, description: "Walk the dog", done: false },
  ];
  todos.loadTodos(userTodos);
  expect(todos.getTodos()).toHaveLength(3);
});

// Test getTodos function
test("getTodos should return the list of todos", () => {
  const todos = todoManagement();
  todos.addTodo(1, "Buy groceries", false);
  todos.addTodo(2, "Do laundry", false);
  todos.addTodo(3, "Walk the dog", false);
  const allTodos = todos.getTodos();
  expect(allTodos).toHaveLength(3);
  expect(allTodos[0]).toEqual({
    id: 1,
    description: "Buy groceries",
    done: false,
  });
  expect(allTodos[1]).toEqual({
    id: 2,
    description: "Do laundry",
    done: false,
  });
  expect(allTodos[2]).toEqual({
    id: 3,
    description: "Walk the dog",
    done: false,
  });
});
