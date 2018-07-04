import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TakenotePage } from './takenote';

@NgModule({
  declarations: [
    TakenotePage,
  ],
  imports: [
    IonicPageModule.forChild(TakenotePage),
  ],
})
export class TakenotePageModule {}
