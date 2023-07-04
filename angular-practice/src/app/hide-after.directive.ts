import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

class HideAfterContext {
  public get $implicit() {
    return this.hideAfter;
  }
  public hideAfter = 0;
  public counter = 0;
}

@Directive({
  selector: '[hideAfter]',
})
export class HideAfterDirective implements OnInit {
  @Input('hideAfter')
  set delay(value: number | null) {
    this._delay = value ?? 0;
    this.context.hideAfter = this.context.counter = this._delay / 1000;
  }
  private _delay = 0;

  @Input('hideAfterLater')
  placeholderRef: TemplateRef<HideAfterContext> | null = null;

  @Input('hideAfterAfter')
  placeCapturerRef: TemplateRef<HideAfterContext> | null = null;

  private context = new HideAfterContext();

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<HideAfterContext>
  ) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
    const intervalId = setInterval(() => {
      this.context.counter--;
    }, 1000);
    setTimeout(() => {
      this.viewContainerRef.clear();
      setTimeout(() => {
        if (this.placeholderRef)
          this.viewContainerRef.createEmbeddedView(
            this.placeholderRef,
            this.context
          );
        clearInterval(intervalId);
      }, 5000);
      this.viewContainerRef.clear();

      if (this.placeCapturerRef)
        this.viewContainerRef.createEmbeddedView(this.placeCapturerRef);
    }, this._delay);
  }

  static ngTemplateContextGuard(
    dir: HideAfterDirective,
    ctx: unknown
  ): ctx is HideAfterContext {
    return true;
  }
}
