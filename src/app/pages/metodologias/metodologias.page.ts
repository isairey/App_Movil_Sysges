import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { ModalController } from '@ionic/angular';
import { IntroMetodologiasComponent } from 'src/app/intro-metodologias/intro-metodologias.component';
import { NetworkService } from 'src/app/services/network.service';

register();

@Component({
  selector: 'app-metodologias',
  templateUrl: './metodologias.page.html',
  styleUrls: ['./metodologias.page.scss'],
})
export class MetodologiasPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private netService: NetworkService,
  ) { }

  

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

  ngOnInit() {
    this.mostrarModal();
    console.log(this.netService.isInvited.valueOf());
    
  }
  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: IntroMetodologiasComponent,
    });
    await modal.present();
  }

}
