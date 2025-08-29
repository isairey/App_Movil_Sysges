import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SanacionPage } from './sanacion.page';

describe('SanacionPage', () => {
  let component: SanacionPage;
  let fixture: ComponentFixture<SanacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SanacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
