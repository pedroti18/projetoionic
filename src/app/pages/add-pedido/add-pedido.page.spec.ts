import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPedidoPage } from './add-pedido.page';

describe('AddPedidoPage', () => {
  let component: AddPedidoPage;
  let fixture: ComponentFixture<AddPedidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPedidoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
