/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LugarsListComponent } from './lugars-list.component';

describe('LugarsListComponent', () => {
  let component: LugarsListComponent;
  let fixture: ComponentFixture<LugarsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugarsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LugarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
