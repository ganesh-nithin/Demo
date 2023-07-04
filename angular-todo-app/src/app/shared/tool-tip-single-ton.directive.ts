import {
  AfterViewInit,
  ContentChildren,
  Directive,
  QueryList,
} from '@angular/core';
import { createSingleton } from 'tippy.js';
import { ToolTipDirective } from './tool-tip.directive';

@Directive({
  selector: '[appToolTipSingleTon]',
})
export class ToolTipSingleTonDirective implements AfterViewInit {
  @ContentChildren(ToolTipDirective, { descendants: true })
  elementsWithTooltips!: QueryList<ToolTipDirective>;

  constructor() {}

  ngAfterViewInit(): void {
    createSingleton(this.getTippyInstances(), {
      moveTransition: 'transform 0.2s ease-out',
    });
  }

  getTippyInstances() {
    return this.elementsWithTooltips.toArray().map((value) => {
      return value.tippyInstance;
    });
  }
}
