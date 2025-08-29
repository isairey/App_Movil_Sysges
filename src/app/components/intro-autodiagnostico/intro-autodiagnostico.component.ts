import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-autodiagnostico',
  templateUrl: './intro-autodiagnostico.component.html',
  styleUrls: ['./intro-autodiagnostico.component.scss'],
})
export class IntroAutodiagnosticoComponent  implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {}

  async closeModal(){
    await this.modalCtrl.dismiss();
  }

  abrirRecursos(){
    this.router.navigate(['/recursos']);
    this.closeModal();
  }

}
