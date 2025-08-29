import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IntroRecursosComponent } from 'src/app/components/intro-recursos/intro-recursos.component';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.page.html',
  styleUrls: ['./recursos.page.scss'],
})
export class RecursosPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.mostrarModal();
  }

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: IntroRecursosComponent,
    });
    return await modal.present();
  }
}
