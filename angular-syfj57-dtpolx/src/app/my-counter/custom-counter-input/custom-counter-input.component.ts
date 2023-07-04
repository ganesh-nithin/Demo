import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { changeName, customIncrement } from "../store/counter.actions";
import { getName } from "../store/counter.selectors";
import { AppState } from "src/app/store/app.state";

@Component({
  selector: "app-custom-counter-input",
  templateUrl: "./custom-counter-input.component.html",
  styleUrls: ["./custom-counter-input.component.css"],
})
export class CustomCounterInputComponent {
  value: number;
  name: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(getName).subscribe((name) => {
      this.name = name;
    });
  }

  onAdd() {
    this.store.dispatch(customIncrement({ value: +this.value }));
  }

  onChangeName() {
    this.store.dispatch(changeName());
  }
}
