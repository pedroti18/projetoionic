import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilFilialPage } from './perfil-filial.page';

describe('PerfilFilialPage', () => {
  let component: PerfilFilialPage;
  let fixture: ComponentFixture<PerfilFilialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilFilialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilFilialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
