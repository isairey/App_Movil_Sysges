import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetworkService } from 'src/app/services/network.service';
import { ModalController } from '@ionic/angular';
import { AlarmasComponent } from 'src/app/components/alarmas/alarmas.component';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {
  visto = 0;

  constructor(
    private router: Router,
    private netService: NetworkService,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    
  }

  aceptar() {
    this.router.navigateByUrl('/home');
    this.netService.isInvited = true;
  }


  
  irARegistro() {
    this.router.navigateByUrl('/inicio');
    this.netService.isInvited = false;
  }

  async abrirModal(){
    const modal = await this.modalCtrl.create({
      component: AlarmasComponent,
      backdropDismiss: false,
    });
    return await modal.present();
  }

}
