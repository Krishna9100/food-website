import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductBelowComponent } from './product-below/product-below.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { IndivisualProductComponent } from './product-below/indivisual-product/indivisual-product.component'
import { products } from './product.model';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: FrontpageComponent },
  { path: 'home', component: HomepageComponent },
  {
    path: 'products', component: ProductBelowComponent, children: [
      { path: 'indivisual-product', component: IndivisualProductComponent }]
  },
  { path: 'products/:id', component: IndivisualProductComponent },
  { path: '**', component: PagenotFoundComponent }

]
@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    HomepageComponent,
    ProductBelowComponent,
    PagenotFoundComponent,
    IndivisualProductComponent,
    IndivisualProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
