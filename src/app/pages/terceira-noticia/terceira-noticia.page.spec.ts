import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiraNoticiaPage } from './terceira-noticia.page';

describe('TerceiraNoticiaPage', () => {
  let component: TerceiraNoticiaPage;
  let fixture: ComponentFixture<TerceiraNoticiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceiraNoticiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceiraNoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
