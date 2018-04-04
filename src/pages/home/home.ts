import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public berv:Flashlight) {

  }

  turnOn(){
  this.berv.switchOn();
  }

  turnOff(){
    this.berv.switchOff();
  }

}
