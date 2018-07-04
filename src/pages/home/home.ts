import { TakenotePage } from './../takenote/takenote';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import{AngularFireModule} from 'angularfire2';
import  firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { NotesPage } from '../notes/notes';
import { Observable } from 'rxjs/Observable';
import { auth } from 'firebase';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: Observable<firebase.User>;
  constructor(public navCtrl: NavController,private afAuth: AngularFireAuth) {

  }
  // async login() {
  //   try {
  
  //     const gplusUser = await this.gplus.login({
       
  // 'WebClientId':'103248035116-62nl60rvln3ovorfe3eugv8ii9npp1ta.apps.googleusercontent.com',
  // 'offline':true,
  //       'scopes': 'profile email'
  //     })
  
  //    // return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))
  // return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken));
  //   } catch(err) {
  //     console.log(err)
  //   }
 

// login() {
//   console.log("login function");
  
//   this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
//   if(this.afAuth.user)
//   {
// this.navCtrl.setRoot(NotesPage);
//   }
// }
// logout() {
//   this.afAuth.auth.signOut();
// }
}

