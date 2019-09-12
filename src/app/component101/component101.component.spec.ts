import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component101Component } from './component101.component';

describe('Component101Component', () => {
  let component: Component101Component;
  let fixture: ComponentFixture<Component101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component101Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
