import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P9Component } from './p9.component';

describe('P9Component', () => {
  let component: P9Component;
  let fixture: ComponentFixture<P9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
