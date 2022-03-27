import { createContext, useContext, useState } from 'react';

export const DialogContext = createContext();

export function DialogProvider({ children }) {
  const [dialog, setDialog] = useState({ show: false, deleteItem: {} });

  const cancel = () => setDialog({ ...dialog, show: !dialog.show });

  const value = { dialog, setDialog, cancel };

  return <DialogContext.Provider value={value}>{children}</DialogContext.Provider>;
}

export const useDialog = () => useContext(DialogContext);
