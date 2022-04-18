export default class Todo {
  constructor(debug) {
    this.debug = debug || false;
    this.todos = [];
    this.categories = [];
  }

  debugMsg(action) {
    if ((this.debug = false)) return;
    console.log('action:', action);
    console.table(this.todos);
  }

  returnMsg({ success, message }, consoleInfo, error) {
    if (error !== undefined) {
      console.error(consoleInfo, error);
    }
    return {
      status: {
        success,
        message,
      },
      todos: this.todos,
    };
  }

  nextId() {
    const firstId = 1;
    const isEmpty = this.todos.length === 0;
    const findLastIndex = this.todos.reduce(
      (currentMax, current) => Math.max(currentMax, current.id),
      0
    );
    return isEmpty ? firstId : findLastIndex + 1;
  }

  timestamp() {
    return new Date().toISOString();
  }

  add({ task }) {
    try {
      this.todos = [
        ...this.todos,
        {
          task,
          isCompleted: false,
          id: this.nextId(),
          createAt: this.timestamp(),
          updateAt: null,
        },
      ];

      this.debugMsg('add');

      return this.returnMsg({
        success: true,
        message: 'Success',
      });
    } catch (err) {
      return this.returnMsg(
        {
          success: false,
          message: err,
        },
        'add failed',
        err
      );
    }
  }

  remove(itemId) {
    if (itemId === undefined) throw new Error(`remove(), please pass item id.`);
    try {
      if (this.todos.length !== 0) {
        const prevLength = this.todos.length;
        this.todos = this.todos.filter((todo) => {
          return todo.id !== itemId;
        });
        if (prevLength === this.todos.length)
          throw new Error('could not remove item. item id not found');
      }

      this.debugMsg('remove');

      return this.returnMsg({
        success: true,
        message: 'Success',
      });
    } catch (err) {
      return this.returnMsg(
        {
          success: false,
          message: err,
        },
        'remove failed',
        err
      );
    }
  }

  edit(itemId, { task, isCompleted }) {
    if (itemId === undefined) throw new Error(`edit(), please pass item id.`);
    try {
      this.todos = this.todos.map((todo) => {
        if (todo.id === itemId) {
          return {
            ...todo,
            task: task ?? todo.task,
            isCompleted: isCompleted ?? todo.isCompleted,
            updateAt: this.timestamp(),
          };
        }
        return todo;
      });

      this.debugMsg('edit');

      return this.returnMsg({
        success: true,
        message: 'Success',
      });
    } catch (err) {
      return this.returnMsg(
        {
          success: false,
          message: err,
        },
        'edit failed',
        err
      );
    }
  }
}
