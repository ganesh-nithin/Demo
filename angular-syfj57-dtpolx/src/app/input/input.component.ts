import { Component } from "@angular/core";
import { CounterService } from "../counter.service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
})
export class InputComponent {
  count: number;

  constructor(private service: CounterService) {}

  ngOnInit() {
    this.service.count.subscribe((data) => {
      this.count = data;
    });
  }

  changeValue() {
    this.service.inputValChange(this.count);
  }
}
