import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  login(correo: string, password: string){
    return this.auth.signInWithEmailAndPassword(correo, password);
  }

  async registro(correo: string, password: string): Promise<void> {
    try {
      const userCredential = await this.auth.createUserWithEmailAndPassword(correo, password);
      const user = userCredential.user;
      if (user) {
        await user.sendEmailVerification();
        console.log('Se envio el correo de verificacion');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      throw error;
    }
  }

  logOut(){
    return this.auth.signOut();
  }
}
