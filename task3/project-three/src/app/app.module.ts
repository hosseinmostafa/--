import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import { FilterPipe } from './filter.pipe';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './Component/product/product.component';
import { ChildeProdctComponent } from './Component/childe-prodct/childe-prodct.component';
import { PipesComponent } from './Component/pipes/pipes.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { LaunchDatePipe } from './Component/launch-date.pipe';
import { LaunchDateComponent } from './Component/launch-date/launch-date.component';
import { ProductListComponent } from './Component/product-list/product-list.component';
import { FliterPipe } from './Component/product-list/fliter.pipe';
import { DescriptionComponent } from './Component/description/description.component';
import { TruncatePipe } from './Component/description/truncate.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ChildeProdctComponent,
    PipesComponent,
    NavbarComponent,
    LaunchDatePipe,
    LaunchDateComponent,
    ProductListComponent,
    FliterPipe,
    DescriptionComponent,
    TruncatePipe,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FliterPipe]
})
export class AppModule {  }
