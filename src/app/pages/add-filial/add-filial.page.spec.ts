import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilialPage } from './add-filial.page';

describe('AddFiliasPage', () => {
  let component: AddFilialPage;
  let fixture: ComponentFixture<AddFilialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFilialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFilialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
