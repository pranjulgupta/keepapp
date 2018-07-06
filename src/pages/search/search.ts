import { NativeStorage } from '@ionic-native/native-storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public nativeStorage:NativeStorage) {
  }
  notesarray=[];
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    
    let self= this;
this.nativeStorage.getItem('cards')
.then(
  data =>{
    console.log(data);
  self.notesarray=data
  },
  error => console.error(error)
); 
console.log(this.notesarray);

  }
 layout=false;

 getItems(ev: any) {
  this.layout=true;
  const val = ev.target.value;

  if (val && val.trim() != '') {
 
    this.notesarray = this.notesarray.filter((searchArray) => {
      return (searchArray.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
    
  }
  
}


}
