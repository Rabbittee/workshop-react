import clsx from 'clsx';
import { CheckCircleIcon as CheckIconSolid } from '@heroicons/react/solid';
import { CheckCircleIcon as CheckIconOutline } from '@heroicons/react/outline';

export function Checkbox({ done, id }) {
  if (done) return <CheckIconSolid id={id} className={clsx('w-6 text-slate-400')} />;
  return <CheckIconOutline id={id} className={clsx('w-6 text-indigo-300')} />;
}
