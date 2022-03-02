class TodoListMethods {
  constructor(todoList, setTodoList) {
    this.todoList = todoList;
    this.setTodoList = setTodoList;
  }

  setData(todoList) {
    this.setTodoList(todoList);
  }

  add(taskTitle) {
    if ([null, undefined, ''].includes(taskTitle)) {
      return;
    }
    const task = {
      id: new Date().getTime(),
      title: taskTitle,
      editTitle: taskTitle,
      status: false,
      edit: false,
    };
    this.setData([...this.todoList, ...[task]]);
  }

  delete(id) {
    const newTodoList = this.todoList.filter((task) => task.id !== id);
    this.setData(newTodoList);
  }

  edit(id, newTitle) {
    const newTodoList = this.todoList.map((task) => {
      task.id === id && (task.editTitle = newTitle);
      return task;
    });
    this.setData(newTodoList);
  }

  toggleTask(id) {
    const newTodoList = this.todoList.map((task) => {
      task.id === id && (task.status = !task.status);
      return task;
    });
    this.setData(newTodoList);
  }

  toggleEditTask(id) {
    const newTodoList = this.todoList.map((task) => {
      if (task.id === id) {
        task.edit && task.editTitle !== '' && (task.title = task.editTitle);
        task.edit = !task.edit;
      }
      return task;
    });
    this.setData(newTodoList);
  }
}

export { TodoListMethods };
