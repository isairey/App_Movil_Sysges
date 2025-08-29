import { Component, OnInit } from '@angular/core';
import { ViolentometroComponent } from 'src/app/components/violentometro/violentometro.component';
import { ModalController } from '@ionic/angular';
import { IntroPrevencionComponent } from 'src/app/components/intro-prevencion/intro-prevencion.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-prevencion',
  templateUrl: './prevencion.page.html',
  styleUrls: ['./prevencion.page.scss'],
})
export class PrevencionPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.mostrarModal();
  }

  abrirRecursos(){
    this.router.navigate(['/recursos']);
  }

  async abrirTest(){
    const modal = await this.modalCtrl.create({
      component: ViolentometroComponent,
      initialBreakpoint:  .9,
      mode: 'md',
      showBackdrop: true,
      backdropDismiss: false,
    });
    return await modal.present();
  }

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: IntroPrevencionComponent,
    });
    await modal.present();
  }

}
