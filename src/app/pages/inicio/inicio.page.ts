import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NetworkService } from 'src/app/services/network.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  credenciales = {
    correo: '',
    password: '',
    password2: '',
  }
  passwordType: string = 'password';
  passwordToggleIcon: string = 'eye-off';

  mostrarRegistro: boolean = false;
  constructor(
    private toastCtrl: ToastController,
    private router: Router, 
    private authService: AuthService,
    public netService: NetworkService
  ) { }

  toggleRegistrationForm() {
    this.mostrarRegistro = !this.mostrarRegistro;
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

  ngOnInit() {
  }

  async login(){
    try{
      await this.authService.login(this.credenciales.correo, this.credenciales.password);
      this.router.navigate(['/home']);
      this.credenciales.correo = '';
      this.credenciales.password = '';
    }catch(error){
      this.mostrarToast('Correo o contraseña incorretos');
    }
  }

  async registro(){    
    const password1 = this.credenciales.password.trim();
    const password2 = this.credenciales.password2.trim();
    if(password1 !== password2){
      this.mostrarToast('Las contraseñas no coinciden');
    }else if(password1.length <8 ||  password2.length < 8){
      this.mostrarToast('La contraseña debe tener al menos 8 caracteres');
    }else{
      try{
        await this.authService.registro(this.credenciales.correo, this.credenciales.password);
        this.mostrarToast('Te registraste con éxito');
        this.credenciales.correo = '';
        this.credenciales.password = '';
        this.credenciales.password2 = '';
        this.router.navigate(['/home']);
      }catch(error){
        this.mostrarToast('Error al registrar usuario. Inténtalo de nuevo más tarde.');
      }
    }
  }

  verContrasena() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    this.passwordToggleIcon = this.passwordToggleIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  ingresarInvitado(){
    this.netService.isInvited = true;
    this.router.navigate(['/bienvenida']);
    this.mostrarToast('Ingresaste como visitante');
  }
}
