import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { uiShopRoutes } from './lib.routes';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(uiShopRoutes)],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class UiShopModule {}
