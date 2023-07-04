import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { increment, decrement, reset } from "./store/counter.actions";
import { getCounter } from "./store/counter.selectors";
import { AppState } from "../store/app.state";

@Component({
  selector: "app-my-counter",
  templateUrl: "./my-counter.component.html",
})
export class MyCounterComponent {
  count: number;

  constructor(private store: Store<AppState>) {
    store.select(getCounter).subscribe((counter) => {
      this.count = counter;
    });
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
