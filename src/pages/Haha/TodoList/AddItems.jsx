import { useState } from 'react';
import Icon from './Icon';
import Button from './Button';
const uuid = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (a) =>
    (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
  );

function AddItems({ addItem }) {
  const [text, setText] = useState({ val: '', isDone: false, id: uuid() });

  const onChange = ({ target }) => {
    setText({ ...text, val: target.value });
  };

  const onKeyDown = ({ key }) => {
    if (key === 'Enter') return onClick();
  };

  const onClick = () => {
    addItem(text);
    setText({ ...text, val: '', id: uuid() });
  };

  return (
    <div className="flex items-center justify-center space-x-5">
      <input
        type="text"
        id="addTask"
        value={text.val}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="input value"
        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
      />
      <Button onClick={onClick} logo="add" label="add" Class="bg-[#78abb19d]" />
    </div>
  );
}
export default AddItems;
