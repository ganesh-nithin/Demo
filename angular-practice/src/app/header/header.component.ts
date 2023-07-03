import { Component, ContentChild, Input } from '@angular/core';
import { CONTENT } from '../content.token';
import { Content } from '../content.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() heading!: string;
  @ContentChild(CONTENT)
  content!: Content;

  displayMe() {
    this.content.sayHaiii();
  }
}
