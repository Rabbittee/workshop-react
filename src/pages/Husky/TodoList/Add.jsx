import { AddIcon } from './components/icon';
import { Input, Button } from './components/utils';

export function Add({ setNewTalk, addTask, newTalk, todoList, setTodoList }) {
  return (
    <div className="flex gap-2">
      <div className="relative">
        <span className="absolute top-4 left-4">
          <AddIcon />
        </span>
        <Input
          value={newTalk}
          placeholder="new task describe"
          onInput={(e) => setNewTalk(e.target.value)}
          icon={true}
        />
      </div>
      <Button
        text="add"
        onClick={() => {
          addTask(newTalk, todoList, setTodoList);
          setNewTalk('');
        }}
      />
    </div>
  );
}
