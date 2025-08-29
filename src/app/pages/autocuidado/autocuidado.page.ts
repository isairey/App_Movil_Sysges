import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { NetworkService } from 'src/app/services/network.service';

import { ModalController } from '@ionic/angular';
import { IntroClavesComponent } from 'src/app/components/intro-claves/intro-claves.component';

import { Router } from '@angular/router';
@Component({
  selector: 'app-autocuidado',
  templateUrl: './autocuidado.page.html',
  styleUrls: ['./autocuidado.page.scss'],
})
export class AutocuidadoPage implements OnInit {
  swiperConfig: SwiperOptions = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
  
  seleccion = '';
  constructor(
    private netService: NetworkService,
    private modalCtrl: ModalController,
    private router: Router

  ) { }

  ngOnInit() {
    console.log(this.netService.isInvited.valueOf());
    this.mostrarModal();
    
  }

  selectCategory(ev: any){
    this.seleccion = ev.detail.value;
  }


  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: IntroClavesComponent,
    });
    await modal.present();
  }



leermas() {
  this.router.navigateByUrl('/recursos');
  this.netService.isInvited = true;
}
}
