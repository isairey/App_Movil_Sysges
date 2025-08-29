import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComunicacionPage } from './comunicacion.page';

describe('ComunicacionPage', () => {
  let component: ComunicacionPage;
  let fixture: ComponentFixture<ComunicacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
