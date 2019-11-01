import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTelaPage } from './list-tela.page';

describe('ListTelaPage', () => {
  let component: ListTelaPage;
  let fixture: ComponentFixture<ListTelaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTelaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTelaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
