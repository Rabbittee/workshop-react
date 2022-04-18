import { createContext, useContext, useReducer } from 'react';
import Icon from './svg';

const ToastContext = createContext();

export function useToast() {
  return useContext(ToastContext);
}

function reducer(messages, action) {
  switch (action.type) {
    case 'push':
      return [
        ...messages,
        {
          ...action.payload,
          key: Math.random().toString(36).substring(2, 9),
        },
      ];
    case 'shift':
      return messages.length === 0 ? [] : [...messages.slice(1)];
    default:
      throw new Error('reducer receive a wrong type');
  }
}

export function ToastProvider({ children }) {
  const [messages, dispatch] = useReducer(reducer, []);

  // status: 0 -> success, 1 -> error, 2 -> warning
  const showToast = ({ message, status }) => {
    dispatch({
      type: 'push',
      payload: { message, status },
    });

    window.setTimeout(() => {
      dispatch({ type: 'shift' });
    }, 2000);
  };

  const value = { showToast };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ul className="fixed top-0 right-0 z-50 m-4 flex flex-col gap-2">
        {messages.map((message) => (
          <ToastItem message={message.message} status={message.status} key={message.key} />
        ))}
      </ul>
    </ToastContext.Provider>
  );
}

function ToastItem({ message, status }) {
  return (
    <li className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-lg">
      <ToastIcon status={status} />
      <span>{message}</span>
    </li>
  );
}

function ToastIcon({ status }) {
  switch (status) {
    case 0:
      return (
        <div className="text-green-500">
          <Icon.Check />
        </div>
      );
    case 1:
      return (
        <div className="text-red-400">
          <Icon.Error />
        </div>
      );
    case 2:
      return (
        <div className="text-orange-400">
          <Icon.Warning />
        </div>
      );
    default:
      throw new Error('ToastIcon receive a wrong status');
  }
}
