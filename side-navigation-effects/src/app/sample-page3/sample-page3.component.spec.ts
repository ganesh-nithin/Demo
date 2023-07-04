import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePage3Component } from './sample-page3.component';

describe('SamplePage3Component', () => {
  let component: SamplePage3Component;
  let fixture: ComponentFixture<SamplePage3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SamplePage3Component]
    });
    fixture = TestBed.createComponent(SamplePage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
