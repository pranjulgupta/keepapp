import { NativeStorage } from '@ionic-native/native-storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-delete',
  templateUrl: 'delete.html',
})
export class DeletePage {
deleteArray=[];
layout=false;
title;
note;
image;
  constructor(public nativeStorage:NativeStorage,  public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    let self= this;
this.nativeStorage.getItem('deleteCards')
.then(
  data =>{
    console.log(data);
  self.deleteArray=data
  },
  error => console.error(error)
);
if(this.deleteArray!=null)
{
this.layout=true;  
} 
console.log(this.deleteArray);

  }


}
