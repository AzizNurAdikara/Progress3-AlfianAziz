/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SejarahComponent } from './sejarah.component';

describe('SejarahComponent', () => {
  let component: SejarahComponent;
  let fixture: ComponentFixture<SejarahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SejarahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SejarahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
