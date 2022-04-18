import clsx from 'clsx';

export function CancelButton({ children, ...props }) {
  return (
    <Button
      {...props}
      className={clsx(['bg-slate-200 text-gray-900 hover:bg-slate-200', props.className])}
    >
      {children}
    </Button>
  );
}

export function DangerButton({ children, ...props }) {
  return (
    <Button
      {...props}
      className={clsx(['bg-red-500 text-white hover:bg-red-400', props.className])}
    >
      {children}
    </Button>
  );
}

export function DangerBorderButton({ children, ...props }) {
  return (
    <Button
      {...props}
      className={clsx([
        'border border-red-500 text-red-500 hover:bg-red-500 hover:text-white',
        props.className,
      ])}
    >
      {children}
    </Button>
  );
}

export function SuccessButton({ children, ...props }) {
  return (
    <Button
      {...props}
      className={clsx(['bg-teal-500 text-white hover:bg-teal-400', props.className])}
    >
      {children}
    </Button>
  );
}

export function SuccessBorderButton({ children, ...props }) {
  return (
    <Button
      {...props}
      className={clsx([
        'border border-teal-600 bg-transparent text-teal-600 hover:bg-teal-600 hover:text-white',
        props.className,
      ])}
    >
      {children}
    </Button>
  );
}

export function Button({ children, ...props }) {
  return (
    <button {...props} className={clsx(['rounded-full p-1.5 transition-colors', props.className])}>
      {children}
    </button>
  );
}
