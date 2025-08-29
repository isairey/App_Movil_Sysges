import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IntroAsertivaComponent } from 'src/app/components/intro-asertiva/intro-asertiva.component';

@Component({
  selector: 'app-comunicacion',
  templateUrl: './comunicacion.page.html',
  styleUrls: ['./comunicacion.page.scss'],
})
export class ComunicacionPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.mostrarModal();
  }

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: IntroAsertivaComponent,
    });
    await modal.present();
  }

}
