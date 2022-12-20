import { UiShopModule } from '@my-org/ui-shop';
import { FeatureShopModule } from '@my-org/feature-shop';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiShopModule, FeatureShopModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
