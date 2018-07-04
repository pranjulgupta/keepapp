import { TakenotePage } from './../takenote/takenote';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-reminders',
  templateUrl: 'reminders.html',
})
export class RemindersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public camera:Camera,public actionSheetCtrl:ActionSheetController) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemindersPage');
  }
  
}
