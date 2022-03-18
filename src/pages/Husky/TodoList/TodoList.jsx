import { List } from './components/utils';
import { Item } from './Item';
import { Add } from './Add';
import { NewTaskContext, useTodoList } from './todoContext';

function TodoList() {
  const { newTaskContextValue, todoList, createItemMethods } = useTodoList();

  return (
    <div className="flex h-screen w-full flex-col items-center gap-4 bg-slate-500 pt-12">
      {/* add */}
      <NewTaskContext.Provider value={newTaskContextValue}>
        <Add />
      </NewTaskContext.Provider>

      {/* list */}
      <List>
        {todoList.map((task) => {
          return <Item key={task.id} task={task} methods={createItemMethods(task)} />;
        })}
      </List>
    </div>
  );
}

export default TodoList;
