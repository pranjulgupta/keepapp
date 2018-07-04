import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {
items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  
  this.items=[
    {item:"View in Google Play Store"},
    {item:"Print..."},
    {item:"Clear Help history"},
    {item:"Version info"},
    {item:"Privacy Policy"},
    {item:"Open-source licences"},
  ]
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

}
