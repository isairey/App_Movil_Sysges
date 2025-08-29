import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-respiracion',
  templateUrl: './respiracion.component.html',
  styleUrls: ['./respiracion.component.scss'],
})
export class RespiracionComponent  implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  closeModal(){
    this.modalCtrl.dismiss();
  }
}
