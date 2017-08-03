/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditLugarComponent } from './edit-lugar.component';

describe('EditLugarComponent', () => {
  let component: EditLugarComponent;
  let fixture: ComponentFixture<EditLugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
