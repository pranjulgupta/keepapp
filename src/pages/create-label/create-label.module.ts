import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateLabelPage } from './create-label';

@NgModule({
  declarations: [
    CreateLabelPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateLabelPage),
  ],
})
export class CreateLabelPageModule {}
