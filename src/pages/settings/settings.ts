import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";



@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city: string;
  state: string;

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     private storage: Storage) {
      this.storage.get("location").then((val) => {
        if(val != null){
          let location = JSON.parse(val);
          this.city = location.city;
          this.state = location.state;
        } else {
          this.city = "Detroit";
          this.state = "MI";
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm() {
    let location  = {
      city: this.city,
       state: this.state
    }
    console.log(location);
  }

}
