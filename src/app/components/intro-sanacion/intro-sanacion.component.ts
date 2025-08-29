import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-intro-sanacion',
  templateUrl: './intro-sanacion.component.html',
  styleUrls: ['./intro-sanacion.component.scss'],
})
export class IntroSanacionComponent  implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  closeModal(){
    this.modalCtrl.dismiss();
    
  }

}
