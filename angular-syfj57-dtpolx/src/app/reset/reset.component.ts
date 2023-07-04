import { Component } from "@angular/core";
import { CounterService } from "../counter.service";

@Component({
  selector: "app-reset",
  templateUrl: "./reset.component.html",
  styleUrls: ["./reset.component.css"],
})
export class ResetComponent {
  constructor(private service: CounterService) {}

  emit() {
    this.service.resetCount();
  }
}
