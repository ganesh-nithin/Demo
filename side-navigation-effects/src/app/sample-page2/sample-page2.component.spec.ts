import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePage2Component } from './sample-page2.component';

describe('SamplePage2Component', () => {
  let component: SamplePage2Component;
  let fixture: ComponentFixture<SamplePage2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SamplePage2Component]
    });
    fixture = TestBed.createComponent(SamplePage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
