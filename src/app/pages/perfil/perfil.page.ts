import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '@firebase/auth-types';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';
import { NetworkService } from 'src/app/services/network.service';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  perfilFoto: string = '';
  userMail: string | null = null;
  datos = {
    nombre: '',
    edad: '',
    estado: '',
    localidad: '',
  };

  constructor(
    private router: Router, 
    private auth: AngularFireAuth, 
    private firestore: AngularFirestore, 
    private storage: AngularFireStorage,
    public netService: NetworkService,
    private alertCtrl: AlertController){
    this.auth.authState.subscribe((user: User | null) =>{
      if(user){
        this.userMail = user.email;
        this.obtenerDatosUsuario();
        console.log(this.datos);
      }else{
        this.userMail = null;
      }
    });
   }

  ngOnInit() {
    this.netService.checkNetworkConnection2();
    if(this.netService.isInvited){
      this.openAlert();
    }
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


  perfilCompleto() {
    this.router.navigate(['./extra']);
  }

  async openAlert (){
    const alert = await this.alertCtrl.create({
      header: 'Inicio de sesión requerido',
      backdropDismiss: false,
      message: 'Debes ingresar para acceder a un perfil',
      buttons:[
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigate(['./home'])
          }
        }
      ]
    })
    await alert.present();
  }

}
