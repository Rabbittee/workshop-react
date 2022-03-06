import { ReactComponent as Add } from '../icon/AddIcon.svg';
import { ReactComponent as Delete } from '../icon/DeleteIcon.svg';
import { ReactComponent as Edit } from '../icon/EditIcon.svg';

/**
 * 統一在一個地方管理 svg，日後比較好維護
 *
 * 缺點就是可能日後一個 svg 沒用到了會不知道
 */
export const Icon = {
  Add,
  Delete,
  Edit,
};
