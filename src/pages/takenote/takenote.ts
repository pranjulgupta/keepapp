import { DeletePage } from './../delete/delete';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, PopoverController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Title } from '@angular/platform-browser';
import { NativeStorage } from '@ionic-native/native-storage';
import { locateHostElement } from '@angular/core/src/render3/instructions';
import { LocalNotifications } from '@ionic-native/local-notifications';
@IonicPage()
@Component({
  selector: 'page-takenote',
  templateUrl: 'takenote.html',
})
export class TakenotePage {
  base64Image:any;
  list:any;
cameraImage:any;
cardNote:any;
title: string;
note: string;
noteForEdit: any;
unarchivetasks:any;
today=Date.now();
newArray:any;
constructor(private localNotifications: LocalNotifications, public nativeStorage: NativeStorage,public navCtrl: NavController, public navParams: NavParams,private camera: Camera,public actionSheetCtrl: ActionSheetController,public popoverCtrl:PopoverController ) {
  this.list = this.navParams.get('showList');
}

updateLayout(index)
{console.log("inside checkBox");

//   this.tasksList[index].Layout="";
// this.tasksList[index].Layout="changeLayout";
this.tasksList[index].Layout=!this.tasksList[index].Layout;
}
  close()
  {
    this.list=true;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad takenotePage');

  }
  notesarray=[];
  index:any;
  isDeleted=false;
  deleteItem:any;
  deleteItemArray=[];

    deleteTask()
  {
    this.isDeleted=true;
    this.index=this.index;
 let self= this;
 if(this.isDeleted==true) {   
  this.nativeStorage.getItem('cards').then(
   data =>{
   self.notesarray=data
  this.deleteItem= this.notesarray.splice(this.index,1);
   let delobj={
    title:this.deleteItem[0].title,
    note:this.deleteItem[0].note,
    image:this.deleteItem[0].image,
    tasks:this.deleteItem[0].tasks
  };
   this.nativeStorage.getItem('deleteCards')
   .then(data => {
     data.push(delobj);
    this.newArray = data;
     this.nativeStorage.setItem('deleteCards',this.newArray)
     .then(
       () => console.log('Stored  delete card item!'),
       error => console.error('Error storing item', error)
     );
   },error => {
     if(error.code==2) {
       let data =[];
       data.push(delobj);
       this.nativeStorage.setItem('deleteCards',data)
       .then(
         () => console.log('Stored item!'),
         error => console.error('Error storing item', error)
       );
     }
   });
   this.nativeStorage.setItem('cards',this.notesarray)
   .then(
     () => console.log('Stored new Array!'),
     error => console.error('Error storing item', error)
   );
   },
   error => console.error(error)
 );
 this.cameraImage="";
 this.title="";
 this.note="";
 this.list=true;

}
  }
  isArchive=false;
  archiveItem:any;
  archiveItemArray=[];
  archiveTask()
  {
    this.isArchive=true;
    this.index=this.index;
    console.log(this.index);
    let self= this;
 if(this.isArchive==true){
 this.nativeStorage.getItem('cards')
 .then(
   data =>{
     console.log(data);
   self.notesarray=data
  this.archiveItem= this.notesarray.splice(this.index,1);
  
   let archiveobj={
     title:this.archiveItem[0].title,
     note:this.archiveItem[0].note,
     image:this.archiveItem[0].image,
     tasks:this.archiveItem[0].tasks
    };
    console.log(this.archiveItem[0].title,this.archiveItem[0].note,this.archiveItem[0].image);
   console.log("delObj "+archiveobj);
   this.nativeStorage.getItem('archiveCards')
   .then(data => {
     data.push(archiveobj);
    this.newArray = data;
     this.nativeStorage.setItem('archiveCards',this.newArray)
     .then(
       () => console.log('Stored  archive card item!'),
       error => console.error('Error storing item', error)
     );
   },error => {
     if(error.code==2) {
       let data =[];
       data.push(archiveobj);
       this.nativeStorage.setItem('archiveCards',data)
       .then(
         () => console.log('Stored item!'),
         error => console.error('Error storing item', error)
       );
     }
   });
console.log(this.notesarray);
   this.nativeStorage.setItem('cards',this.notesarray)
   .then(
     () => console.log('Stored new Array!'+this.notesarray.length),
     error => console.error('Error storing item', error)
   );
   },
   error => console.error(error)
 );
 this.cameraImage="";
 this.title="";
 this.note="";
 this.list=true;
}
  }unacrchive=false;
  unarchiveTasklist()
  {this.unacrchive=true;
    this.notes={title:this.title,note:this.note, image:this.cameraImage, tasks: this.tasksList};
    this.addNotes();
console.log("inside unacchive");
 this.cameraImage="";
        this.title="";
        this.note="";
        this.list=true;
  }
  archiveid;
  ionViewDidEnter() { 
    this.index=this.navParams.get('index');
this.archiveid=this.navParams.get('archiveId');
console.log("archiveId",this.archiveid);

    console.log("index",this.index);
    if(this.index==undefined)
    {
        this.cameraImage=this.navParams.get('imageurl');
        console.log(this.cameraImage);
        this.unarchivetasks=this.navParams.get('notes');
        console.log("unarchive task list",this.unarchivetasks);
        this.title=this.unarchivetasks.title;
        this.cameraImage=this.unarchivetasks.image;
        this.note=this.unarchivetasks.note;
        this.tasksList=this.unarchivetasks.tasks;
        console.log("unarchivetask",this.tasksList,this.title,this.note,this.cameraImage);
        if(!(this.tasksList.length==1&&this.tasksList[0].name==""))
        {
    this.list=false;
         }
 
        //return is must
        return
    }

    console.log("outside");
    this.noteForEdit = this.navParams.get('note');
    console.log(this.noteForEdit);
    this.title=this.noteForEdit.title;
    this.cameraImage=this.noteForEdit.image;
    this.note=this.noteForEdit.note;
    this.tasksList=this.noteForEdit.tasks;
    console.log("camera image",this.cameraImage);
    console.log("noteforedit",this.noteForEdit);
    
    if(!(this.tasksList.length==1&&this.tasksList[0].name==""))
    {
this.list=false;
    }
    console.log(this.title,this.note,this.tasksList,this.cameraImage);
  }   
  notes:any;
  name;
//isUnarchive=false;
  ionViewWillLeave()

  {
    console.log(" taskArray= ",this.tasksList);
    
    
    if(this.title!=null&&this.note!==null&&this.isDeleted==false&&this.isArchive==false&&this.archiveid!=1)
    {
      console.log("addnote insise will leave");
    this.notes={title:this.title,note:this.note, image:this.cameraImage, tasks: this.tasksList};
    this.addNotes();

  }
}

  addNotes() {
   
    this.nativeStorage.getItem('cards')
    .then(data => {
      if(this.index!=null)
      {
        data[this.index].title=this.title;
        data[this.index].note=this.note;
       data[this.index].image=this.cameraImage;
       data[this.index].tasks=this.tasksList;

      }
     console.log("inside data task list " ,this.tasksList);
    console.log("inside data tasks " ,data[this.index].tasks);
    
      if(this.index==null)
      { console.log("index",this.index);

      data.push(this.notes);
            }      this.newArray = data;
      this.nativeStorage.setItem('cards',this.newArray)
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );
    },error => {
      if(error.code==2) {
        let data =[];
        data.push(this.notes);
        this.nativeStorage.setItem('cards',data)
        .then(
          () => console.log('Stored item!'),
          error => console.error('Error storing item', error)
        );
      }
    });
  }

  actionsheet() {
      let actionSheet = this.actionSheetCtrl.create({
        buttons: [
          {icon:'ios-camera',
            text: 'Take photo',
            role: 'destructive',
            handler: () => {
              console.log('Destructive clicked');
            }
          },
          {icon:'ios-image',
            text: 'Choose image',
            handler: () => {
              console.log('Archive clicked');
            }
          },
          {icon:'ios-create',
            text: 'Drawing',
            role: 'destructive',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            icon:'ios-mic',
            text: 'Recording',
            role: 'destructive',
            handler: () => {
              console.log('Recording clicked');
            }
          },
          {icon:'ios-list',
            text: 'Tick boxes',
            role: 'destructive',
            handler: () => {
              console.log('Tick boxes clicked');
            }
          }
        ]
      });
   
      actionSheet.present();
    }

    actionsheet1()
    {
        let actionSheet = this.actionSheetCtrl.create({
          buttons: [
            {icon:'ios-trash',
              text: 'Delete',
              role: 'destructive',
              handler: () => {
                console.log('Destructive clicked');
              }
            },
            {icon:'ios-copy',
              text: 'Make a copy',
              handler: () => {
                console.log('Archive clicked');
              }
            },
            {icon:'ios-send',
              text: 'Send',
              role: 'destructive',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              icon:'ios-contact',
              text: 'Collaborator',
              role: 'destructive',
              handler: () => {
                console.log('Recording clicked');
              }
            },
            {icon:'ios-list',
              text: 'Labels',
              role: 'Labels',
              handler: () => {
                console.log('Tick boxes clicked');
              }
            }
          ]
        });
     
        actionSheet.present();
      }
    tasksList=[{name:'',Layout:false}];
    openList()
    {
      this.tasksList.push({name:'',Layout:false});
    }
}