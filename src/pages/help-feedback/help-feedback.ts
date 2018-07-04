import { PopoverPage } from './../popover/popover';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-help-feedback',
  templateUrl: 'help-feedback.html',
})
export class HelpFeedbackPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpFeedbackPage');
  }  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }}

