import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSomosPage } from './add-somos.page';

describe('AddSomosPage', () => {
  let component: AddSomosPage;
  let fixture: ComponentFixture<AddSomosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSomosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSomosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
