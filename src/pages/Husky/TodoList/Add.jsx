import { useContext } from 'react';

import { NewTalkContext } from './TodoList';
import { Icon } from './components/icon';
import { Input, Button } from './components/utils';

export function Add() {
  const { value, update, click } = useContext(NewTalkContext);

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
          value={value}
          placeholder="new task describe"
          onInput={(e) => update(e.target.value)}
          icon={true}
        />
      </div>
      <Button text="add" onClick={click} />
    </div>
  );
}
