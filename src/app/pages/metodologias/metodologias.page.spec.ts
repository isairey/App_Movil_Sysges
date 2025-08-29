import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MetodologiasPage } from './metodologias.page';

describe('MetodologiasPage', () => {
  let component: MetodologiasPage;
  let fixture: ComponentFixture<MetodologiasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodologiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
