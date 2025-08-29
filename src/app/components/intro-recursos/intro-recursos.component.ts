import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-intro-recursos',
  templateUrl: './intro-recursos.component.html',
  styleUrls: ['./intro-recursos.component.scss'],
})
export class IntroRecursosComponent  implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  closeModal(){
    this.modalCtrl.dismiss();
  }
}
