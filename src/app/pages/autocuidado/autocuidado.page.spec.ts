import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutocuidadoPage } from './autocuidado.page';

describe('AutocuidadoPage', () => {
  let component: AutocuidadoPage;
  let fixture: ComponentFixture<AutocuidadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocuidadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
