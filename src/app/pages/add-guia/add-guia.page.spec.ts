import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuiaPage } from './add-guia.page';

describe('AddGuiaPage', () => {
  let component: AddGuiaPage;
  let fixture: ComponentFixture<AddGuiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGuiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGuiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
