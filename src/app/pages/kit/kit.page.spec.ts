import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KitPage } from './kit.page';

describe('KitPage', () => {
  let component: KitPage;
  let fixture: ComponentFixture<KitPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
