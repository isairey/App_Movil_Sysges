import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IntroSanacionComponent } from 'src/app/components/intro-sanacion/intro-sanacion.component';

@Component({
  selector: 'app-sanacion',
  templateUrl: './sanacion.page.html',
  styleUrls: ['./sanacion.page.scss'],
})
export class SanacionPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.mostrarModal();
  }

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: IntroSanacionComponent,
    });
    await modal.present();
  }

}
