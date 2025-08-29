import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-intro-claves',
  templateUrl: './intro-claves.component.html',
  styleUrls: ['./intro-claves.component.scss'],
})
export class IntroClavesComponent  implements OnInit {

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {}

  abrirRecursos(){  
    this.router.navigate(['/recursos']);
  }

  async closeModal(){
    await this.modalCtrl.dismiss();
  }

}
