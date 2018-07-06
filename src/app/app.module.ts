import { LocalNotifications } from '@ionic-native/local-notifications';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SearchPage } from './../pages/search/search';
import { NativeStorage } from '@ionic-native/native-storage';
import { ListpagePage } from './../pages/listpage/listpage';
import { TakenotePage } from './../pages/takenote/takenote';
import { PopoverPage } from './../pages/popover/popover';
import { CreateLabelPage } from './../pages/create-label/create-label';
import { HelpFeedbackPage } from './../pages/help-feedback/help-feedback';
import { DeletePage } from './../pages/delete/delete';
import { ArchivePage } from './../pages/archive/archive';
import { NotesPage } from './../pages/notes/notes';
import { SettingsPage } from './../pages/settings/settings';
import { RemindersPage } from './../pages/reminders/reminders';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FormsModule } from '@angular/forms';
import{AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import firebase from 'firebase';
import { looseIdentical } from '@angular/core/src/util';

export const firebaseConfig={
  apiKey: "AIzaSyCKxpJYAxln7sVy7IQvjDeCVQvOazhrZ80",
  authDomain: "login-33c59.firebaseapp.com",
  databaseURL: "https://login-33c59.firebaseio.com",
  projectId: "login-33c59",
  storageBucket: "login-33c59.appspot.com",
  messagingSenderId: "103248035116"
}
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    MyApp,
    HomePage,NotesPage,RemindersPage,SettingsPage,CreateLabelPage, SearchPage,HelpFeedbackPage,DeletePage,ArchivePage,PopoverPage,TakenotePage,ListpagePage
  ],
  imports: [
    BrowserModule,FormsModule,AngularFireAuthModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,NotesPage,RemindersPage,SettingsPage,SearchPage,CreateLabelPage,HelpFeedbackPage,DeletePage,ArchivePage,PopoverPage,TakenotePage,ListpagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,NativeStorage,TextToSpeech,LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
 
    
  ]
})
export class AppModule {}
