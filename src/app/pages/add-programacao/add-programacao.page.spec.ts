import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProgramacaoPage } from './add-programacao.page';

describe('AddProgramacaoPage', () => {
  let component: AddProgramacaoPage;
  let fixture: ComponentFixture<AddProgramacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProgramacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProgramacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
