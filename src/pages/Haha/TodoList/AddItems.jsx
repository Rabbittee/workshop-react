import { useState } from 'react';
import Input from './Input';
import Button from './Button';
import Dialog from './Dialog';

function AddItems({ addItem }) {
  const [text, setText] = useState({ val: '', isDone: false, id: Date.now() });
  const [showDialog, setShowDialog] = useState(false);

  const onChange = ({ target }) => {
    setText({ ...text, val: target.value });
  };

  const onKeyDown = ({ key }) => {
    if (key === 'Enter') return onClick();
  };

  const onClick = () => {
    if (!text.val) return setShowDialog(!showDialog);
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
      {showDialog && (
        <Dialog message="Don't add empty item" cancel={() => setShowDialog(!showDialog)} />
      )}
    </div>
  );
}
export default AddItems;
