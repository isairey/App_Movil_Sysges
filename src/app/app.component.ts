// src/app/app.component.ts
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { NetworkService } from './services/network.service';
import {
  LocalNotifications,
  LocalNotificationSchema,
  ActionPerformed
} from '@capacitor/local-notifications';
import { Preferences } from '@capacitor/preferences';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  userMail: string | null = null;
  alarma: HTMLAudioElement;

  public appPages = [
    { title: 'Registrarme', url: '/inicio', icon: 'person-circle' },
    { title: 'Mi perfil', url: '/perfil', icon: 'person' },
    { title: 'Autocuidado', url: '/colectivo', icon: 'people' },
    { title: 'Metodología de autocuidado', url: '/metodologias', icon: 'footsteps' },
    { title: 'Claves del autocuidado', url: '/autocuidado', icon: 'heart' },
    { title: 'Kit de seguridad digital', url: '/kit', icon: 'wifi' },
    { title: 'Kit de sanación', url: '/sanacion', icon: 'heart-half' },
    { title: 'Botiquín de autocuidado', url: '/botiquin', icon: 'medkit' },
    { title: 'Comunicación asertiva', url: '/comunicacion', icon: 'chatbubble-ellipses' },
    { title: 'Prevención de la violencia', url: '/prevencion', icon: 'hand-right' },
    { title: 'Recursos', url: '/recursos', icon: 'folder-open' },
    { title: 'Créditos', url: '/creditos', icon: 'information-circle' },
    { title: 'Ayúdanos a crecer', url: '/extra', icon: 'id-card' },
    { title: 'Alarma', url: '/alarmas', icon: 'alarm' }
  ];

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private platform: Platform,
    public netService: NetworkService,
    private toastCtrl: ToastController
  ) {
    this.alarma = new Audio('../../assets/alarma.mp3');
    this.initializeApp();

    // Suscripción al estado de autenticación
    this.auth.authState.subscribe((user: firebase.User | null) => {
      this.userMail = user ? user.email : null;
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      document.body.classList.remove('dark');
      document.body.setAttribute('data-theme', 'light');
      this.netService.checkNetworkConnection();
      this.solicitarPermisos();
    });
  }

  isLoggedIn(): boolean {
    return !!this.userMail;
  }

  // Mostrar menú según condición
  shouldShowMenu(): boolean {
    return true; // O agrega lógica real según autenticación
  }

  // Cerrar sesión
  logout() {
    this.auth.signOut().then(() => {
      this.userMail = null;
      this.router.navigate(['/inicio']);
    });
  }

  // Solicitar permisos de notificación
  async solicitarPermisos() {
    const result = await LocalNotifications.requestPermissions();
    console.log('Permisos notificaciones:', result);

    if (result.display === 'granted' || (result as any).receive === 'granted') {
      this.mostrarToast('Permisos concedidos');

      const { value } = await Preferences.get({ key: 'notificaciones_programadas' });
      if (!value) {
        await this.cancelarNotificacionesPrevias();
        await this.programarNotificaciones();
        await Preferences.set({ key: 'notificaciones_programadas', value: 'true' });
      }

      this.configurarListeners();
    } else {
      this.mostrarToast('Permisos denegados');
    }
  }

  async cancelarNotificacionesPrevias() {
    await LocalNotifications.cancel({ notifications: [{ id: 1 }, { id: 2 }, { id: 3 }] });
  }

  async programarNotificaciones() {
    const notifications: LocalNotificationSchema[] = [
      {
        id: 1,
        title: 'Buen día',
        body: 'Te recordamos que es importante realizar acciones de autocuidado por las mañanas',
        schedule: { on: { hour: 9, minute: 0 }, repeats: true },
        sound: 'default'
      },
      {
        id: 2,
        title: '¡Hey! No olvides tu salud',
        body: 'Es hora del autocuidado vespertino',
        schedule: { on: { hour: 14, minute: 0 }, repeats: true },
        sound: 'default'
      },
      {
        id: 3,
        title: '¿Se te olvida algo antes de dormir?',
        body: 'Te recomendamos realizar el autocuidado nocturno',
        schedule: { on: { hour: 20, minute: 0 }, repeats: true },
        sound: 'default'
      }
    ];
    await LocalNotifications.schedule({ notifications });
  }

  configurarListeners() {
    LocalNotifications.addListener('localNotificationReceived', () => {
      this.alarma.play();
    });
    LocalNotifications.addListener('localNotificationActionPerformed', () => {
      this.alarma.play();
    });
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }
}
