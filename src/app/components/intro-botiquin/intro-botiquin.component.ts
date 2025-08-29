import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-botiquin',
  templateUrl: './intro-botiquin.component.html',
  styleUrls: ['./intro-botiquin.component.scss'],
})
export class IntroBotiquinComponent  implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {}

  async closeModal(){
    await this.modalCtrl.dismiss();
  }

  abrirRecursos(){
    this.router.navigate(['/recursos']);
    this.closeModal();
  }

}
