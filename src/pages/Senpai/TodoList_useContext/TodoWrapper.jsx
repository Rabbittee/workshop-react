import clsx from 'clsx';
import TodoForm from './TodoForm';

function TodoWrapper({ dataList }) {
  return (
    <ul className={clsx('flex flex-col gap-3', 'text-lg text-gray-300')}>
      {dataList.length === 0 ? (
        <li className={clsx('h-full w-full py-2', 'bg-cyan-700 text-center', 'rounded-b-md')}>
          empty list
        </li>
      ) : (
        dataList.map((item) => (
          <li
            key={`list_${item.id}`}
            className={clsx(
              'flex h-full w-full items-center py-1 px-4',
              'bg-cyan-700 text-center',
              'rounded-md first:rounded-t-none'
            )}
          >
            <TodoForm item={item} />
          </li>
        ))
      )}
    </ul>
  );
}
export default TodoWrapper;
