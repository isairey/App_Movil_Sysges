import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-intro-prevencion',
  templateUrl: './intro-prevencion.component.html',
  styleUrls: ['./intro-prevencion.component.scss'],
})
export class IntroPrevencionComponent  implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}


  closeModal(){
    this.modalCtrl.dismiss();
  }
}
