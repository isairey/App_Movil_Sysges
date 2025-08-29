import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '@firebase/auth-types';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { ToastController } from '@ionic/angular';
import { NetworkService } from 'src/app/services/network.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-violentometro',
  templateUrl: './violentometro.component.html',
  styleUrls: ['./violentometro.component.scss'],
})
export class ViolentometroComponent  implements OnInit {
  userMail: string | null = null;
  
  public progress = 0;
  public violencia = 0;
  step = 1;
  si = 0;
  no = 0;
  res = 0;
  today = new Date;
  day = this.today.getDay();
  month = this.today.getMonth() + 1;
  year = this.today.getFullYear();
  formattedDate = `${this.day.toString().padStart(2, '0')}/${this.month.toString().padStart(2, '0')}/${this.year}`;
  respuestas = {
    correo: '',
    si: '',
    no: ''
  }

  constructor(
    private modalCtrl: ModalController,
    private auth: AngularFireAuth, 
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    public netService: NetworkService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.netService.checkNetworkConnection2();
    this.auth.authState.subscribe((user: User | null) =>{
      if(user){
        this.userMail = user.email;
        console.log(this.userMail);
        
      }else{
        this.userMail = null;
      }
    });
  }

  async closeModal() {
    await this.modalCtrl.dismiss({
    });
  }

  registrarme(){
    this.router.navigate(['/inicio']);
    this.netService.isInvited = false;
    this.closeModal();
  }

  aumentarSi(){
    this.step += 1;
    this.si += 1;
    this.progress = this.progress + 0.09;
    console.log('pregunta: ' + this.step);
    console.log('progreso: ' + this.progress);
    if (this.step > 0) {
      this.evaluar();
    }
  }

  aumentarNo(){
    this.step += 1;
    this.no += 1;
    this.progress = this.progress + 0.09;
    console.log('pregunta: ' + this.step);
    console.log('progreso: ' + this.progress);
    if (this.step > 0) {
      this.evaluar();
    }
  }

  evaluar(){
    if(this.step == 13 && this.si ==0){
      this.res = 0;
      this.evaluarViolencia();
    }else if(this.step == 13 && this.si <=3){
      this.res = 1;
      this.evaluarViolencia();
    }else if( this.step == 13 && this.si >3 && this.si <=8){
      this.res = 2;
      this.evaluarViolencia();
    }else if( this.step == 13 && this.si >8){
      this.res = 3;
      this.evaluarViolencia();
    }
  }

  evaluarViolencia(){
    this.violencia = (1/12)*this.si;
    console.log('nivel de violencia', this.violencia);
  }

  get progressBarColor(): string {
    if (this.violencia <= 0.3) {
      return 'linear-gradient(to right, yellow, yellow)';
    } else if (this.violencia > 0.3 && this.violencia < 0.6) {
      return 'linear-gradient(to right, yellow, orange)';
    } else{
      return 'linear-gradient(to right, yellow, orange, red)';
    }
  }


  guardarResultado(){
    this.firestore.collection('violentometro', ref => ref.where('correo', '==', this.userMail)).get().subscribe(
      snapshot => {
        if(!snapshot.empty){
          snapshot.forEach(doc => {
            this.firestore.collection('violentometro').doc(doc.id).update({
              correo: this.userMail,
              respuestasSi: this.si,
              respuestasNo: this.no,
              ultimoTest: this.formattedDate
            }).then(() => {
              this.mostrarToast('Datos actualizados correctamente');
            }).catch(error => {
              this.mostrarToast('Error al actualizar tus datos');
            });
          });
        }else{
          this.firestore.collection('violentometro').add({
            correo: this.userMail,
            respuestasSi: this.si,
            respuestasNo: this.no,
            fecha: this.formattedDate,
          }).then(()=>{
            this.mostrarToast('Datos guardados correctamente');
      
          }).catch(error => {
            this.mostrarToast('Error al registrar tus datos')
          });
        }   
      },
      error => {
        this.mostrarToast('Error al obtener los datos');
      }
    )
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
