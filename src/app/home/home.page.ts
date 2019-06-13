import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private iab: InAppBrowser, private platform: Platform ) {
    this.platform.ready().then(()=> {
      this.iab.create('https://www.varma.com/es/', '_system');
    })
  }

  openblank(){
    this.iab.create('https://www.varma.com/es/', '_blank');
  }

  openSystem(){
    this.iab.create('https://www.varma.com/es/', '_system');
  }

}
