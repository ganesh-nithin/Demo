import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CounterService {
 
  count = new BehaviorSubject(0);

  incrementCount() {
    this.count.next(this.count.getValue() + 1);
  }

  decrementCount() {
    this.count.next(this.count.getValue() - 1);
  }

  inputValChange(data: number) {
    this.count.next(data);
  }

  resetCount() {
    this.count.next(0);
  }
}
