import { Component } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { UpdateItem } from 'src/shared/models/update-item.model';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
  }

  updateEvent(updateItem: UpdateItem) {
    let index = this.budgetItems.indexOf(updateItem.old);
    this.budgetItems[index] = updateItem.new;
    this.totalBudget -= updateItem.old.amount;
    this.totalBudget += updateItem.new.amount;
  }
}
