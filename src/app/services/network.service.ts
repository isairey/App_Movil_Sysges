import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';
import { Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  public isConnected: boolean = true;
  public isInvited: boolean = false;

  constructor(
    private platform: Platform,
    private toastCtrl: ToastController,
    private router: Router,
  ) { 
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.checkNetworkConnection();
    });
  }

  async checkNetworkConnection() {
    const status = await Network.getStatus();
    this.isConnected = status.connected;
    if (!status.connected) {
      this.mostrarToast('Conéctate a una red para acceder al contenido completo');
    }
  }

  async checkNetworkConnection2() {
    const status = await Network.getStatus();
    this.isConnected = status.connected;
    if (!status.connected) {
      this.mostrarToast('Conéctate a una red para acceder al contenido completo');
    }
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
