import { UiShopModule } from './../../../../libs/ui-shop/src/lib/ui-shop.module';
// import { FeatureShopModule } from './../../../../libs/feature-shop/src/lib/feature-shop.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiShopModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
