import { useState } from 'react';

export function useDialog() {
  const [dialog, setDialog] = useState({ text: '', show: false });

  const openDialog = (text = '', show = false) => {
    console.log(text, show);
    setDialog({ text, show });
  };

  return { dialog, openDialog, setDialog };
}
