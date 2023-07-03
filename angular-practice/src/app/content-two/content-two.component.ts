import { Component } from '@angular/core';
import { Content } from '../content.interface';
import { CONTENT } from '../content.token';

@Component({
  selector: 'app-content-two',
  templateUrl: './content-two.component.html',
  styleUrls: ['./content-two.component.css'],
  providers: [
    {
      provide: CONTENT,
      useExisting: ContentTwoComponent,
    },
  ],
})
export class ContentTwoComponent implements Content {
  content: string = 'Content - Two';

  sayHaiii() {
    this.content = 'Content Two Says Haiii';

    setTimeout(() => {
      this.content = 'Content - Two';
    }, 3000);
  }
}
