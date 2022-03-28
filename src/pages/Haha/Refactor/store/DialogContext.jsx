import { createContext, useContext, useState } from 'react';
import { Init } from '../utils/Init';

export const DialogContext = createContext();

export function DialogProvider({ children }) {
  const [dialog, setDialog] = useState(() => Init.dialog());

  const cancel = () => setDialog({ show: !dialog.show });

  const value = { dialog, setDialog, cancel };

  return <DialogContext.Provider value={value}>{children}</DialogContext.Provider>;
}

export const useDialog = () => useContext(DialogContext);
