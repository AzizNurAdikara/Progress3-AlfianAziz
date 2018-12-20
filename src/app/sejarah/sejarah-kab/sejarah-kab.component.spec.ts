/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SejarahKabComponent } from './sejarah-kab.component';

describe('SejarahKabComponent', () => {
  let component: SejarahKabComponent;
  let fixture: ComponentFixture<SejarahKabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SejarahKabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SejarahKabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
