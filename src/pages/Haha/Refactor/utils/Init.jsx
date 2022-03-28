export const Init = {
  // 初始化項目
  item: (id = Date.now()) => {
    return { done: false, edit: false, id };
  },
  // 初始化 dialog
  dialog: (show = false, deleteID = '') => {
    return { show, deleteID };
  },
};
