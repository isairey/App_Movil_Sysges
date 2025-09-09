import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

interface Alarma {
  hora: string;
  dias: number[]; // 1=Lunes, 2=Martes, ... 7=Domingo
  activa: boolean;
}

@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.page.html',
  styleUrls: ['./alarmas.page.scss'],
})
export class AlarmasPage implements OnInit {
  alarmas: Alarma[] = [];
  horaSeleccionada: string = '08:00';
  diasSeleccionados: number[] = [];

  constructor() {}

  ngOnInit() {

    this.programarRecordatorios();
    // Cargar alarmas guardadas
    const guardadas = localStorage.getItem('alarmas');
    this.alarmas = guardadas ? JSON.parse(guardadas) : [];

    // Listener de notificaciones
    LocalNotifications.addListener(
      'localNotificationActionPerformed',
      (notification) => {
        if (notification.actionId === 'APAGAR') {
          this.apagarAlarma(notification.notification.id);
        }
      }
    );
  }

  agregarAlarma() {
    const nuevaAlarma: Alarma = {
      hora: this.horaSeleccionada,
      dias: [...this.diasSeleccionados],
      activa: true,
    };

    this.alarmas.push(nuevaAlarma);
    this.guardarAlarmas();
    this.programarNotificaciones(nuevaAlarma);
  }

  toggleAlarma(alarma: Alarma) {
    alarma.activa = !alarma.activa;
    this.guardarAlarmas();
    if (alarma.activa) {
      this.programarNotificaciones(alarma);
    } else {
      this.cancelarNotificaciones(alarma);
    }
  }

  toggleDia(dia: number) {
    if (this.diasSeleccionados.includes(dia)) {
      this.diasSeleccionados = this.diasSeleccionados.filter(x => x !== dia);
    } else {
      this.diasSeleccionados.push(dia);
    }
  }

  getDiasTexto(dias: number[]): string {
    if (!dias) return '';
    const nombres = ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'];
    return dias.map(d => nombres[d - 1]).join(', ');
  }

  async programarNotificaciones(alarma: Alarma) {
    for (let dia of alarma.dias) {
      const fecha = this.proximoDia(dia, alarma.hora);
      await LocalNotifications.schedule({
        notifications: [
          {
            title: '¡Alarma!',
            body: 'Toca "Apagar" para detenerla',
            id: new Date().getTime() + dia, // id único por día
            schedule: { at: fecha },
            sound: 'res://alarma.mp3',
            actionTypeId: 'APAGAR',
          },
        ],
      });
    }
  }

  async apagarAlarma(id: number) {
    await Haptics.impact({ style: ImpactStyle.Heavy });
    await LocalNotifications.cancel({ notifications: [{ id }] });
    console.log('Alarma apagada', id);
  }

  cancelarNotificaciones(alarma: Alarma) {
    alarma.dias.forEach(async (dia) => {
      // Nota: Esto puede duplicar ids si agregas la misma alarma varias veces.
      await LocalNotifications.cancel({ notifications: [{ id: new Date().getTime() + dia }] });
    });
  }

  proximoDia(dia: number, hora: string): Date {
    const [hh, mm] = hora.split(':').map(Number);
    const hoy = new Date();
    const fecha = new Date();
    fecha.setHours(hh, mm, 0, 0);
    const diferencia = (dia + 7 - hoy.getDay()) % 7;
    fecha.setDate(hoy.getDate() + (diferencia === 0 && fecha < hoy ? 7 : diferencia));
    return fecha;
  }

  // Nueva función para guardar alarmas en localStorage
  guardarAlarmas() {
    localStorage.setItem('alarmas', JSON.stringify(this.alarmas));
  }



async programarRecordatorios() {
  const recordatorios = [
    { hora: '09:00', mensaje: '💧 Bebe un vaso de agua para mantenerte hidratado.' },
    { hora: '12:00', mensaje: '🍎 Toma una fruta o snack saludable.' },
    { hora: '15:00', mensaje: '🚶 Da un pequeño paseo o estírate.' },
    { hora: '22:00', mensaje: '😴 Hora de relajarte y preparar tu descanso.' },
  ];

  for (let r of recordatorios) {
    const [hh, mm] = r.hora.split(':').map(Number);
    const fecha = new Date();
    fecha.setHours(hh, mm, 0, 0);

    // Si ya pasó, lo programamos para mañana
    const ahora = new Date();
    if (fecha <= ahora) {
      fecha.setDate(fecha.getDate() + 1);
    }

    await LocalNotifications.schedule({
      notifications: [
        {
          id: new Date().getTime(),
          title: 'Recordatorio de autocuidado',
          body: r.mensaje,
          schedule: { at: fecha, repeats: true }, // 🔁 se repite diario
          sound: 'default',
        },
      ],
    });
  }

  console.log('Recordatorios de autocuidado programados');
}
}


