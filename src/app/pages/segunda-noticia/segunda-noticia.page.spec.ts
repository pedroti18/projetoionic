import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaNoticiaPage } from './segunda-noticia.page';

describe('SegundaNoticiaPage', () => {
  let component: SegundaNoticiaPage;
  let fixture: ComponentFixture<SegundaNoticiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundaNoticiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaNoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
