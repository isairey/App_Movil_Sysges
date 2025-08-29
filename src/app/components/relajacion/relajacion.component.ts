import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-relajacion',
  templateUrl: './relajacion.component.html',
  styleUrls: ['./relajacion.component.scss'],
})
export class RelajacionComponent  implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
