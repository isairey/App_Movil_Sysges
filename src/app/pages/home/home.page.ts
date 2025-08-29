import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public appPages = [
    { title: 'Registrarme', url: '/inicio', icon: 'person-circle', descripcion: 'Página de registro e inicio de sesión' },
    { title: 'Mi perfil', url: '/perfil', icon: 'person', descripcion: 'Perfil del usuario' },
    { title: 'Autocuidado', url: '/colectivo', icon: 'people', descripcion: 'Test para verificar que tan bien llevas el autocuidado' },
    { title: 'Metodología de autocuidado', url: '/metodologias', icon: 'footsteps', descripcion: 'Metodología de 13 pasos para una vida más saludable' },
    { title: 'Claves del autocuidado', url: '/autocuidado', icon: 'heart', descripcion: '4 Claves del autocuidado que podrían ayudarte' },
    { title: 'Kit de seguridad digital', url: '/kit', icon: 'wifi', descripcion: 'Información importante para mantenerte segura en la red' },
    { title: 'Kit de sanación', url: '/sanacion', icon: 'heart-half', descripcion: 'Ejercicios y actividades para mejorar la salud' },
    { title: 'Botiquín de autocuidado', url: '/botiquin', icon: 'medkit', descripcion: 'Recursos que te ayudarán a vivir mejor' },
    { title: 'Comunicación asertiva', url: '/comunicacion', icon: 'chatbubble-ellipses', descripcion: 'Mejora tu comunicación para emitir mejores mensajes' },
    { title: 'Prevención de la violencia', url: '/prevencion', icon: 'hand-right', descripcion: 'Un test que te ayudará a descubrir el nivel de violencia al que te has expuesto' },
    { title: 'Recursos', url: '/recursos', icon: 'folder-open', descripcion: 'Página de recursos completos para descargar' },
    { title: 'Créditos', url: '/creditos', icon: 'information-circle', descripcion: 'Créditos y contactos' },
    { title: 'Ayúdanos a crecer', url: '/extra', icon: 'id-card', descripcion: 'Aquí puedes agregar información adicional para ayudarnos a mejorar' },
  ];


  constructor() { }

  ngOnInit() {
  }

}
