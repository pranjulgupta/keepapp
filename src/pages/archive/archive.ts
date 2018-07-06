import { SearchPage } from './../search/search';
import { NativeStorage } from '@ionic-native/native-storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TakenotePage } from '../takenote/takenote';
@IonicPage()
@Component({
  selector: 'page-archive',
  templateUrl: 'archive.html',
})
export class ArchivePage {
  archiveArray=[];
layout=false;
layout1=false;
title;
note;
image;
newArray=[];
  constructor( public nativeStorage:NativeStorage, public navCtrl: NavController, public navParams: NavParams) {
  }  
  
  toggle()
  { 
this.layout1=!this.layout1;

  }
  searchNotes()
  {
    this.navCtrl.push(SearchPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArchivePage');
    let self= this;
    this.nativeStorage.getItem('archiveCards')
    .then(
      data =>{
        console.log(data);
      self.archiveArray=data
      },
      error => console.error(error)
    );
    if(this.archiveArray!=null)
    {
    this.layout=true;  
    } 
    console.log(this.archiveArray);
  }
  openNote(index)
  {
let  cardobj = {
  Index:index,
  archiveId:1,
  showList: true,
  notes:this.archiveArray[index]  
};
console.log("inside archive",cardobj);

let self= this;
  this.nativeStorage.getItem('archiveCards')
  .then(data => {
 self.newArray=data
console.log(self.newArray.splice(index,1));
    this.nativeStorage.setItem('archiveCards',self.newArray)
    .then(
      () => console.log('Stored item! '+ self.newArray),
      error => console.error('Error storing item', error)
    );
  },error => {
    if(error.code==2) {
      this.nativeStorage.setItem('archiveCards',self.newArray)
      .then(
        () => console.log('Stored item!'+ self.newArray),
        error => console.error('Error storing item', error)
      );
    }
  });
  console.log("another inside archive",cardobj);
 this.navCtrl.push(TakenotePage,cardobj);

  }

}
