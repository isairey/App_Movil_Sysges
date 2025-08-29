import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColectivoPage } from './colectivo.page';

describe('ColectivoPage', () => {
  let component: ColectivoPage;
  let fixture: ComponentFixture<ColectivoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ColectivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
