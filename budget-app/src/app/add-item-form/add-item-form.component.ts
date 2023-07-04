import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss'],
})
export class AddItemFormComponent {
  @Input() item: BudgetItem = new BudgetItem('', NaN);
  @Output() formSubmit: EventEmitter<BudgetItem> =
    new EventEmitter<BudgetItem>();

  isNewItem: boolean = true;

  ngOnInit() {
    if (this.item.description) {
      this.isNewItem = false;
    }
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
