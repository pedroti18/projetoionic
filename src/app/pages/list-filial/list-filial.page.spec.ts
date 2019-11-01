import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilialPage } from './list-filial.page';

describe('ListFiliasPage', () => {
  let component: ListFilialPage;
  let fixture: ComponentFixture<ListFilialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFilialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
