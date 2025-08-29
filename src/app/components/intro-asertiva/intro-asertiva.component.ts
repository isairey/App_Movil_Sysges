import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-asertiva',
  templateUrl: './intro-asertiva.component.html',
  styleUrls: ['./intro-asertiva.component.scss'],
})
export class IntroAsertivaComponent  implements OnInit {

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
