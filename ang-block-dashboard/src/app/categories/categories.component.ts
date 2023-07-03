import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  categoryData!: string;

  onSubmit(form: any) {
    this.categoryData = form.category;
    console.log(this.categoryData);
  }
}
