import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SearchPage } from './../search/search';
import { Title } from '@angular/platform-browser';
import { NativeStorage } from '@ionic-native/native-storage';
import { TakenotePage } from './../takenote/takenote';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {
data:any;
  constructor(private tts: TextToSpeech,public nativeStorage:NativeStorage, public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController,private camera: Camera){
  }
title;
notes;
  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesPage');

  }
  
  openNote(index) {
    let  cardObj = {
      index:index,
      showList: true, 
      note:this.notesarray[index]  
    };
    console.log("cardObj is",cardObj);
    this.navCtrl.push(TakenotePage,cardObj);
  }

  layout=false;
  toggle()
  { 
this.layout=!this.layout;

  }
  searchNotes()
  {
    this.navCtrl.push(SearchPage);
  }
  notesarray=[];
  ionViewDidEnter()
  {
    
    let self= this;
this.nativeStorage.getItem('cards')
.then(
  data =>{
    console.log(data);
  self.notesarray=data
  },
  error => console.error(error)
); 
  
console.log("notesArray ",this.notesarray);
// console.log("task name",this.notesarray);

}

 
  showObj = { showList: true }
  goToNotes()
  {
    this.navCtrl.push(TakenotePage,this.showObj);
   
   
  }
  goToList()
  {
    this.navCtrl.push(TakenotePage,!this.showObj);
  }
    
      base64Image:any
      goToCamera()
      {
        let actionSheet = this.actionSheetCtrl.create({
          title: 'Add Image',

          buttons: [
            {icon:'ios-camera',
              text: 'Take photo',
              role: 'destructive',
              handler: () => {
                this.takephoto();
              }
            },
            {icon:'ios-image',
              text: 'Choose image',
              
              handler: () => {
                this.openGallery();
              }
            },
      ]
    });
    actionSheet.present()
}
photos:any;
takephoto() {
    const options: CameraOptions = {
          quality: 70,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        }

        this.camera.getPicture(options).then((imageData) => {
          this.base64Image  = 'data:image/jpeg;base64,' + imageData;
          let baseImage={imageurl:this.base64Image,showList: true};
          console.log("image from note page",baseImage);
          
          this.navCtrl.push(TakenotePage,baseImage);
        }, (err) => {
          // Handle error
        })
      }
   
       openGallery() {
   
       const options: CameraOptions = {
         quality: 70,
         destinationType: this.camera.DestinationType.DATA_URL,
         encodingType: this.camera.EncodingType.JPEG,
         mediaType: this.camera.MediaType.PICTURE,
         sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
       }
   
       this.camera.getPicture(options).then((imageData) => {
     
         this.base64Image  = 'data:image/jpeg;base64,' + imageData;
         let baseImage={imageurl:this.base64Image,showList: true};
          this.navCtrl.push(TakenotePage,baseImage);
       }, (err) => {
         // Handle error
       })
       
      }
}