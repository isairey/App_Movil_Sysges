import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrevencionPage } from './prevencion.page';

describe('PrevencionPage', () => {
  let component: PrevencionPage;
  let fixture: ComponentFixture<PrevencionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevencionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
