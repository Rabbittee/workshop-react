import { useState } from 'react';

import { List } from './components/utils';
import { Item } from './Item';
import { Add } from './Add';
import { TodoListMethods } from './methods';

function TodoList() {
  const [newTalk, setNewTalk] = useState();
  const [todoList, setTodoList] = useState([]);

  const methods = new TodoListMethods(todoList, setTodoList);

  return (
    <div className="flex h-screen w-full flex-col items-center gap-4 bg-slate-500 pt-12">
      {/* add */}
      <Add setNewTalk={setNewTalk} newTalk={newTalk} methods={methods} />

      {/* list */}
      <List
        items={todoList.map((task) => {
          return (
            <Item
              key={task.id}
              task={task}
              clickDelete={() => methods.delete(task.id)}
              editTask={(newTitle) => methods.edit(task.id, newTitle)}
              onClick={() => methods.toggleTask(task.id)}
              clickEdit={() => methods.toggleEditTask(task.id)}
            />
          );
        })}
      />
    </div>
  );
}

export default TodoList;
