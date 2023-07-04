import { Component } from "@angular/core";
import { CounterService } from "../counter.service";

@Component({
  selector: "app-decrement",
  templateUrl: "./decrement.component.html",
  styleUrls: ["./decrement.component.css"],
})
export class DecrementComponent {
  constructor(private service: CounterService) {}

  emit() {
    this.service.decrementCount();
  }
}
