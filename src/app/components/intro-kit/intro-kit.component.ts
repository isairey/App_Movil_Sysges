import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-kit',
  templateUrl: './intro-kit.component.html',
  styleUrls: ['./intro-kit.component.scss'],
})
export class IntroKitComponent  implements OnInit {

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
