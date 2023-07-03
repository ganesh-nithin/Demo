import { Component } from '@angular/core';
import { Content } from '../content.interface';
import { CONTENT } from '../content.token';

@Component({
  selector: 'app-content-one',
  templateUrl: './content-one.component.html',
  styleUrls: ['./content-one.component.css'],
  providers: [
    {
      provide: CONTENT,
      useExisting: ContentOneComponent,
    },
  ],
})
export class ContentOneComponent implements Content {
  content: string = 'Content - One';

  sayHaiii() {
    this.content = 'Content One Says Haiii';

    setTimeout(() => {
      this.content = 'Content - One';
    }, 3000);
  }
}
