import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntroAutodiagnosticoComponent } from './intro-autodiagnostico.component';

describe('IntroAutodiagnosticoComponent', () => {
  let component: IntroAutodiagnosticoComponent;
  let fixture: ComponentFixture<IntroAutodiagnosticoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroAutodiagnosticoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroAutodiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
