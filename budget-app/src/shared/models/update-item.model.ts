import { BudgetItem } from './budget-item.model';

export interface UpdateItem {
  old: BudgetItem;
  new: BudgetItem;
}
