import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureShopRoutes } from './lib.routes';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(featureShopRoutes)],
  declarations: [ProductsComponent],
  exports: [ProductsComponent],
})
export class FeatureShopModule {}
