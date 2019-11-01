import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiraNoticiaPage } from './primeira-noticia.page';

describe('PrimeiraNoticiaPage', () => {
  let component: PrimeiraNoticiaPage;
  let fixture: ComponentFixture<PrimeiraNoticiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeiraNoticiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiraNoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
