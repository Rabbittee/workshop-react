import { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';

function AddItems({ add, handleDialog }) {
  const [text, setText] = useState({ val: '', isDone: false, id: Date.now() });

  const onChange = ({ target }) => {
    setText({ ...text, val: target.value });
  };

  const onKeyDown = ({ key }) => {
    key === 'Enter' && onClick();
  };

  const onClick = () => {
    if (!text.val) return handleDialog('Don"t add empty item');
    add(text);
    setText({ ...text, val: '', id: Date.now() });
  };

  return (
    <div className="flex-center flex space-x-5">
      <Input
        inputVal={text.val}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="w-full"
        label="input value"
      />
      <Button
        onClick={onClick}
        size="30"
        logo="add"
        message="add"
        className="vertial-center rounded-lg bg-[#78abb19d] p-2 px-5 py-2.5 text-center text-sm text-gray-900 hover:bg-[#F7BE38]/90 "
      />
    </div>
  );
}
export default AddItems;
