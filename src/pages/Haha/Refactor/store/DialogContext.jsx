import { createContext, useContext, useState } from 'react';

export const DialogContext = createContext();

export function DialogProvider({ children }) {
  const [dialog, setDialog] = useState({ text: '', alert: false, confirm: false, deleteItem: {} });

  const cancel = () => setDialog({ ...dialog, alert: !dialog.alert });
  const value = { dialog, setDialog, cancel };

  return <DialogContext.Provider value={value}>{children}</DialogContext.Provider>;
}

export const useDialog = () => useContext(DialogContext);
