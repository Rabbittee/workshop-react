import { useState } from 'react';
import Input from './Input';
import Button from './Button';

function AddItems({ addItem, handleDialog }) {
  const [text, setText] = useState({ val: '', isDone: false, id: Date.now() });

  const onChange = ({ target }) => {
    setText({ ...text, val: target.value });
  };

  const onKeyDown = ({ key }) => {
    if (key === 'Enter') return onClick();
  };

  const onClick = () => {
    if (!text.val) return handleDialog('Don"t add empty item');
    addItem(text);
    setText({ ...text, val: '', id: Date.now() });
  };

  return (
    <div className="flex items-center justify-center space-x-5">
      <Input
        inputVal={text.val}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="w-full"
        label="input value"
      />
      <Button
        fn={onClick}
        size="30"
        logo="add"
        message="add"
        className="inline-flex items-center rounded-lg bg-[#78abb19d] p-2 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-[#F7BE38]/90 focus:ring-4 focus:ring-[#F7BE38]/50 dark:focus:ring-[#F7BE38]/50"
      />
    </div>
  );
}
export default AddItems;
