import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss'],
})
export class AccordianComponent {
  @Input() title?: string;
  @Input() isHidden: boolean = true;
}
