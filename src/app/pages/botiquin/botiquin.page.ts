import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NetworkService } from 'src/app/services/network.service';
import { ModalController } from '@ionic/angular';
import { IntroBotiquinComponent } from 'src/app/components/intro-botiquin/intro-botiquin.component';
import { MapaComponent } from 'src/app/components/mapa/mapa.component';
import { EngancheComponent } from 'src/app/components/enganche/enganche.component';
import { RespiracionComponent } from 'src/app/components/respiracion/respiracion.component';

@Component({
  selector: 'app-botiquin',
  templateUrl: './botiquin.page.html',
  styleUrls: ['./botiquin.page.scss'],
})
export class BotiquinPage implements OnInit {
  audioReproduciendose: boolean = false;
  audio: any;


  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    public netService: NetworkService,
    private modalCtrl: ModalController) { 
  }


  ngOnInit() {
    this.mostrarModal();
    this.netService.checkNetworkConnection2();
    this.audio = new Audio();
    this.audio.src = '../../assets/meditacion.mp3';
    this.audio.load();
  }

  async abrirRespiracion(){
    const modal = await this.modalCtrl.create({
      component: RespiracionComponent,
    });
    await modal.present();
  }

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: IntroBotiquinComponent,
    });
    await modal.present();
  }

  async abrirMapa(){
    const modal = await this.modalCtrl.create({
      component: MapaComponent,
    });
    await modal.present();
  }

  async abrirEnganche(){
    const modal = await this.modalCtrl.create({
      component: EngancheComponent,
    });
    await modal.present();
  }
  playAudio() {
    if (this.audioReproduciendose) {
      this.pausarAudio();
    } else {
      this.reproducirAudio();
    }
  }
  reproducirAudio() {
    this.audio.play();
    this.audioReproduciendose = true;
  }

  pausarAudio() {
    this.audio.pause();
    this.audioReproduciendose = false;
  }

  abrirKit(){
    this.router.navigate(['/kit-seguridad']);
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000, 
      position: 'bottom',
      animated: true,
    });
    toast.present();
  }


}
