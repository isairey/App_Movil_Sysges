import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-enganche',
  templateUrl: './enganche.component.html',
  styleUrls: ['./enganche.component.scss'],
})
export class EngancheComponent  implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
