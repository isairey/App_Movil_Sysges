import { Component, MissingTranslationStrategy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocalNotifications, LocalNotificationActionPerformed, LocalNotification} from '@capacitor/local-notifications';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.component.html',
  styleUrls: ['./alarmas.component.scss'],
})
export class AlarmasComponent  implements OnInit {
  horaFijada: string = "";
  alarma: any;

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    this.alarma = new Audio();
    this.alarma.src = '../../assets/alarma.mp3';
    this.alarma.load();
    this.permisos();
    this.setupNotificationListeners();
  }

  async permisos(){
    const result = await LocalNotifications.requestPermissions();
    if (result.display === 'granted'){
      console.log('Permisos concedidos');
      this.mostrarToast('Permisos concedidos');
    }else{
      console.log('Permisos denegados');
      this.mostrarToast('Permisos denegados');
    }
  }

  onTimeChange(event:any){
    this.horaFijada = event.detail.value;
    console.log(this.horaFijada);
  }

  async fijarAlarma(){
    if(this.horaFijada){
      const fechaActual = new Date();
      const fechaFijada = new Date(this.horaFijada);

      fechaFijada.setFullYear(fechaActual.getFullYear(), fechaActual.getMonth(), fechaActual.getDate());

      if (fechaFijada < fechaActual) {
        // Si la hora seleccionada ya ha pasado para hoy, configura la alarma para el día siguiente
        fechaFijada.setDate(fechaActual.getDate() + 1);
      }

      await this.horarioAlarma(fechaFijada);
    }else{
      this.mostrarToast('Selecciona una hora');
    }
  }

  async horarioAlarma(horaDeAlarma: Date){
    await LocalNotifications.schedule({
      notifications:[
        {
          title: 'Alarma',
          body: '¡Hora de la alarma!',
          id: 1,
          schedule: {
            at: horaDeAlarma
          },
          sound: 'default',
        }
      ]
    });
    this.mostrarToast('Alarma configurada para:' + horaDeAlarma.toString());
  }

  setupNotificationListeners() {
    LocalNotifications.addListener('localNotificationReceived', (notification: LocalNotification) => {
      this.alarma.play();
    });

    LocalNotifications.addListener('localNotificationActionPerformed', (notification: LocalNotificationActionPerformed) => {
      this.alarma.play();
    });
  }

  closeModal(){
    this.modalCtrl.dismiss();
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
