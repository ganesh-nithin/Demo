import { AfterViewInit, Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent implements AfterViewInit {
  form!: FormGroup;
  @Input() rate!: number;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      rating: [],
    });
  }

  ngAfterViewInit(): void {
    this.form = this.fb.group({
      rating: [{ value: this.rate.toFixed(0), disabled: true }],
    });
  }
}
