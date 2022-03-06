import { Icon } from './components/icon';
import { Input, Button } from './components/utils';

export function Add({ setNewTalk, newTalk, addTask }) {
  return (
    <div className="flex gap-2">
      <div className="relative">
        <span className="absolute top-4 left-4">
          {/* compound components 的概念 */}
          <Icon.Add
            className="h-5 w-5 text-gray-400"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
          addTask();
          setNewTalk('');
        }}
      />
    </div>
  );
}
