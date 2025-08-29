import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.page.html',
  styleUrls: ['./creditos.page.scss'],
})
export class CreditosPage implements OnInit {

  constructor(
    public netService: NetworkService
  ) { }

  ngOnInit() {
    this.netService.checkNetworkConnection2();
  }

}
