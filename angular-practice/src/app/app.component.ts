import { Component } from '@angular/core';
import { LoadingState, Person } from './if-loaded.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  state: LoadingState<Person> = {
    type: 'loading',
  };
  title = 'angular-practice';
  content: string = 'Content';

  constructor() {
    setTimeout(() => {
      this.state = {
        type: 'loaded',
        data: {
          name: 'Nithin',
        },
      };
    }, 3000);
  }
}
