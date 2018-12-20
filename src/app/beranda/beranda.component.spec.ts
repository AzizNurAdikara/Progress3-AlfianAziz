/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BerandaComponent } from './beranda.component';

describe('BerandaComponent', () => {
  let component: BerandaComponent;
  let fixture: ComponentFixture<BerandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerandaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
