import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[hideAfter]',
})
export class HideAfterDirective implements OnInit {
  @Input('hideAfter')
  delay = 0;

  @Input('hideAfterLater')
  placeholderRef: TemplateRef<any> | null = null;
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    setTimeout(() => {
      this.viewContainerRef.clear();
      if (this.placeholderRef)
        this.viewContainerRef.createEmbeddedView(this.placeholderRef);
    }, this.delay);
  }
}
