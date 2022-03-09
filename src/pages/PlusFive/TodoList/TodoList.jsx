/*
 * @Author:Claire Li
 * @Date:2022-02-28 14:35:47
 * @LastEditors:Claire Li
 * @LastEditTime:2022-03-20 22:11:39
 * @Description:
 */
// Q: Why should it have to import 'React'?
import { useState } from 'react';
import './index.css';
import Todo from './components/todo';
import Form from './components/form';
// import AddBtn from './components/addBtn';

function TodoList(props) {
  // initial tasks value is props.tasks (after object destructuring is tasks)
  // useState returns tasks and setTasks(), use array destructuring to catch it
  const [tasks, setTasks] = useState(props.tasks);

  // pass this Fn to Form component to catch task typed in Form
  function addTask(name) {
    // put name into object to make it as the same type with the object in tasks array
    const newTask = { id: new Date().getTime(), name: name, completed: false };
    // copy the exist tasks array and put the new task in the end of array
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if matches return updated task
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      // if doesn't match return origin task
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks?.map((task) => (
    <Todo
      {...task}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h2 className="font-style mb-3 text-center">PlusFive's TodoList</h2>
      <main className="shadow-style rounded-sm border p-5">
        <Form addTask={addTask} />
        <ul className="mt-2">{taskList}</ul>
      </main>
    </div>
  );
}

export default TodoList;
