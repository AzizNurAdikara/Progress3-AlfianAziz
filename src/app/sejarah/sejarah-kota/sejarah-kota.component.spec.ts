/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SejarahKotaComponent } from './sejarah-kota.component';

describe('SejarahKotaComponent', () => {
  let component: SejarahKotaComponent;
  let fixture: ComponentFixture<SejarahKotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SejarahKotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SejarahKotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
