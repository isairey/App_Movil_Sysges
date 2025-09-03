import { Component } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.page.html',
  styleUrls: ['./alarmas.page.scss'],
})
export class AlarmasPage {
  horaAlarma: string = ''; // inicializamos con string vacío

  constructor() {}

  // Programar alarma a la hora seleccionada
  async programarAlarma() {
    if (!this.horaAlarma) {
      alert('Selecciona una hora primero.');
      return;
    }

    const [hora, minuto] = this.horaAlarma.split(':').map(Number);
    const ahora = new Date();
    const fechaAlarma = new Date();
    fechaAlarma.setHours(hora, minuto, 0, 0);

    // Si la hora seleccionada ya pasó hoy, programarla para mañana
    if (fechaAlarma <= ahora) {
      fechaAlarma.setDate(fechaAlarma.getDate() + 1);
    }

    await LocalNotifications.schedule({
      notifications: [
        {
          id: new Date().getTime(), // id único
          title: 'Alarma programada',
          body: '¡Es hora de tu recordatorio!',
          schedule: { at: fechaAlarma },
          sound: 'default'
        }
      ]
    });

    alert(`Alarma programada a las ${this.horaAlarma}`);
  }

  // Desactivar todas las alarmas programadas
  async desactivarAlarmas() {
    // Obtiene todas las notificaciones pendientes
    const pendientes = await LocalNotifications.getPending();
    const ids = pendientes.notifications.map(n => ({ id: n.id }));

    if (ids.length > 0) {
      await LocalNotifications.cancel({ notifications: ids });
    }

    alert('Todas las alarmas han sido desactivadas.');
  }
}
