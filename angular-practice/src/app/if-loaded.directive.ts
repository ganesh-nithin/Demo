import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export type Loaded<T> = { type: 'loaded'; data: T };
export type Loading = { type: 'loading' };
export type LoadingState<T> = Loaded<T> | Loading;
export interface Person {
  name: string;
}

@Directive({
  selector: '[ifLoaded]',
})
export class IfLoadedDirective<T> {
  private isViewCreated = false;

  @Input('ifLoaded') set state(state: LoadingState<T>) {
    if (!this.isViewCreated && state.type === 'loaded') {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.isViewCreated = true;
    } else if (this.isViewCreated && state.type !== 'loaded') {
      this.viewContainerRef.clear();
      this.isViewCreated = false;
    }
  }

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly templateRef: TemplateRef<unknown>
  ) {}

  static ngTemplateGuard_ifLoaded<T>(
    dir: IfLoadedDirective<T>,
    state: LoadingState<T>
  ): state is Loaded<T> {
    return true;
  }
}
