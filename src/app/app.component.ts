import { HomePage } from './../pages/home/home';
import { TakenotePage } from './../pages/takenote/takenote';
import { HelpFeedbackPage } from './../pages/help-feedback/help-feedback';
import { ArchivePage } from './../pages/archive/archive';
import { SettingsPage } from './../pages/settings/settings';
import { NotesPage } from './../pages/notes/notes';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RemindersPage } from '../pages/reminders/reminders';
import { CreateLabelPage } from '../pages/create-label/create-label';
import { DeletePage } from '../pages/delete/delete';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav; 
  rootPage:any = NotesPage;
  pages: Array<{ title: string, icon:string,md:string, Component: any }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages=[
    {title:'Notes',icon:'ios-bulb', md:'md-bulb',Component:NotesPage},
    {title:'Reminders',icon:'ios-alarm', md:"md-alarm",Component:RemindersPage},
    {title:'Create new label',icon:'ios-add', md:'md-add',Component:CreateLabelPage},
    {title:'Archive',icon:'ios-archive', md:'md-archive',Component:ArchivePage},  
    {title:'Deleted',icon:'ios-trash', md:'md-trash',Component:DeletePage},
    {title:'Settings',icon:'ios-cog',md:'md-cog',Component:SettingsPage},
    {title:'Help & feedback',icon:'ios-help', md:'md-help',Component:HelpFeedbackPage},
  ];

  
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page)
  {
    this.nav.setRoot(page.Component);
  }

}

