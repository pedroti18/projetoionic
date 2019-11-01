import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFiliasPage } from './add-filias.page';

describe('AddFiliasPage', () => {
  let component: AddFiliasPage;
  let fixture: ComponentFixture<AddFiliasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFiliasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFiliasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
