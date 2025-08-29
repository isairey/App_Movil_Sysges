import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '@firebase/auth-types';
import { ToastController } from '@ionic/angular';
import { NetworkService } from 'src/app/services/network.service';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';



@Component({
  selector: 'app-extra',
  templateUrl: './extra.page.html',
  styleUrls: ['./extra.page.scss'],
})
export class ExtraPage implements OnInit {
  perfilFoto: string = '';
  userMail: string | null = null;
  datos = {
    correo: '',
    nombre: '',
    edad: '',
    estado: '',
    localidad: '',
  }

  constructor(
    private router: Router, 
    private auth: AngularFireAuth, 
    private toastCtrl: ToastController, 
    private firestore: AngularFirestore,
    private storage: AngularFireStorage,
    public netService: NetworkService) {
    this.auth.authState.subscribe((user: User | null) =>{
      if(user){
        this.userMail = user.email;
        this.obtenerDatosUsuario();
      }else{
        this.userMail = null;
      }
    });
   }

  ngOnInit() {
    this.netService.checkNetworkConnection2();
    
  }
  guardar(){
    this.firestore.collection('Users').add({
      Nombre: this.datos.nombre,
      Correo: this.userMail,
      Edad: this.datos.edad,
      Estado: this.datos.estado,
      Localidad: this.datos.localidad,
    }).then(()=>{
      this.mostrarToast('Datos guardados, gracias por ayudarnos a crecer');
      this.router.navigate(['./perfil']);

    }).catch(error => {
      this.mostrarToast('Error al registrar tuss datos')
    });
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

  selectImage() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  uploadImage(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const filePath = `profile_images/${this.userMail}/profile_pictures/${file.type.split('/')[1]}`;
      const fileRef = this.storage.ref(filePath);
      const uploadTask = this.storage.upload(filePath, file);

      uploadTask.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.perfilFoto = url;
            
            this.firestore.collection('Users', ref => ref.where('Correo', '==', this.userMail)).get().subscribe(
              snapshot => {
                snapshot.forEach(doc => {
                  this.firestore.collection('Users').doc(doc.id).update({
                    profileImageUrl: url
                  });
                });
              }
            )
          });
        })
      ).subscribe();
    }
  }

  obtenerDatosUsuario() {
    this.firestore.collection('Users', ref => ref.where('Correo', '==', this.userMail)).valueChanges().subscribe((data: any[]) => {
      if (data.length > 0) {
        this.datos.nombre = data[0].Nombre;
        this.datos.edad = data[0].Edad;
        this.datos.estado = data[0].Estado;
        this.datos.localidad = data[0].Localidad;
        this.perfilFoto = data[0].profileImageUrl || '../../../assets/GESMujer45años.png';
      }
    });
  }

}
