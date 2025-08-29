import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-intro-metodologias',
  templateUrl: './intro-metodologias.component.html',
  styleUrls: ['./intro-metodologias.component.scss'],
})
export class IntroMetodologiasComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit(
    
  ) {}

  async closeModal(){
    await this.modalCtrl.dismiss();
  }
}
