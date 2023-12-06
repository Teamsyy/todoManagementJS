class Todo {
  static runningId = 1;

  constructor(id, description, done = false) {
    this.id = id ?? Todo.runningId++;
    console.log(this.id);
    this.description = description;
    this.done = done;
  }

  getTodo() {
    return this;
  }

  setDescription(newDescription) {
    this.description = newDescription;
  }

  setDone(value) {
    this.done = value;
  }
}

// export {todo}
module.exports = Todo;
