import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigUsuarioPage } from './config-usuario';

@NgModule({
  declarations: [
    ConfigUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigUsuarioPage),
  ],
})
export class ConfigUsuarioPageModule {}
