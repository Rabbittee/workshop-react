import { useNewTaskContext } from './todoContext';
import { Icon } from './components/icon';
import { Input, Button } from './components/utils';

export function Add() {
  const { newTask, addTask, updateNewTask } = useNewTaskContext();

  return (
    <div className="flex gap-2">
      <div className="relative">
        <span className="absolute top-4 left-4">
          <Icon.Add
            className="h-5 w-5 text-gray-400"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </span>
        <Input
          value={newTask}
          placeholder="new task describe"
          onInput={updateNewTask}
          icon={true}
        />
      </div>
      <Button text="add" onClick={addTask} />
    </div>
  );
}
