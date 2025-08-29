import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotiquinPage } from './botiquin.page';

describe('BotiquinPage', () => {
  let component: BotiquinPage;
  let fixture: ComponentFixture<BotiquinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BotiquinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
