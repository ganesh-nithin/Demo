import { Component } from "@angular/core";
import { CounterService } from "../counter.service";

@Component({
  selector: "app-increment",
  templateUrl: "./increment.component.html",
  styleUrls: ["./increment.component.css"],
})
export class IncrementComponent {
  constructor(private service: CounterService) {}

  emit() {
    this.service.incrementCount();
  }
}
