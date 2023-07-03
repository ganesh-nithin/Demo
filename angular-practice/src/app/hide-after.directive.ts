import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

class HideAfterContext {
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
    this.context.hideAfter = this._delay / 1000;
  }
  private _delay = 0;

  @Input('hideAfterLater')
  placeholderRef: TemplateRef<any> | null = null;

  private context = new HideAfterContext();

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
    setTimeout(() => {
      this.viewContainerRef.clear();
      if (this.placeholderRef)
        this.viewContainerRef.createEmbeddedView(this.placeholderRef);
    }, this._delay);
  }
}
