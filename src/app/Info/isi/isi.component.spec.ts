/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IsiComponent } from './isi.component';

describe('IsiComponent', () => {
  let component: IsiComponent;
  let fixture: ComponentFixture<IsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
