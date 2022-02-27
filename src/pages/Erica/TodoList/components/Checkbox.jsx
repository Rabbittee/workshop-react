import { CheckCircleIcon as CheckIconSolid } from '@heroicons/react/solid';
import { CheckCircleIcon as CheckIconOutline } from '@heroicons/react/outline';
import { clsx } from '../utils';

export function Checkbox({ done, id }) {
  if (done) {
    return <CheckIconSolid id={id} className={clsx(
      'w-6 text-slate-400'
    )} />;
  } else {
    return <CheckIconOutline id={id} className={clsx(
      'w-6 text-indigo-300'
    )} />;
  }
}
