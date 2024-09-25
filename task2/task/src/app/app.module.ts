import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ProductsComponent } from './Component/products/products.component';
import { IProductComponent } from './Shared Classes and types/iproduct/iproduct.component';
import { ICategoryComponent } from './Shared Classes and types/iproduct/icategory/icategory.component';
import { DiscountOffersComponent } from './Shared Classes and types/iproduct/discount-offers/discount-offers.component';
import { LifecycleHooksComponent } from './Component/lifecycle-hooks/lifecycle-hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    IProductComponent,
    ICategoryComponent,
    DiscountOffersComponent,
    LifecycleHooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
