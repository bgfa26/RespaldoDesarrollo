import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisListasPage } from './mis-listas';

@NgModule({
  declarations: [
    MisListasPage,
  ],
  imports: [
    IonicPageModule.forChild(MisListasPage),
  ],
})
export class MisListasPageModule {}
