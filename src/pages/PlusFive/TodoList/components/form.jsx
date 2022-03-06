/*
 * @Author:Claire Li
 * @Date:2022-03-05 17:07:38
 * @LastEditors:Claire Li
 * @LastEditTime:2022-03-06 15:43:58
 * @Description:
 */
// Q: Why should it have to import 'React'?
import { useState } from 'react';
import AddBtn from './addBtn';

function Form(prop) {
  // set name initial value as '', and a function called setName() to modify name
  // useState() returns name and setName(), use array destructuring to capture them in separate variables
  const [name, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) {
      alert('please type something :)');
      return;
    }

    prop.addTask(name);
    setName('');
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="shadow-style mb-5 flex justify-between rounded border focus-within:ring-2 focus-within:ring-slate-300">
        <input
          name="text"
          type="text"
          className="font-style bg-transparent px-1 focus:outline-none"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <AddBtn />
      </div>
    </form>
  );
}

export default Form;
