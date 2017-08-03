/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LugarFormComponent } from './lugar-form.component';

describe('LugarFormComponent', () => {
  let component: LugarFormComponent;
  let fixture: ComponentFixture<LugarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LugarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
