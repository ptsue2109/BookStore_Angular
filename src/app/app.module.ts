import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { PrimeModule } from './shared/uiHelpers/prime/Prime.module';
 import { MdbModule  } from './shared/uiHelpers/mdb/Mdb.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyPipe } from './shared/pipes/currency.pipe';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ToastrModule } from 'ngx-toastr'
import { GalleriaModule } from 'primeng/galleria';
import { ProductsComponent } from './pages/admin/products/products.component';
import { AdminProListComponent } from './pages/admin/products/admin-pro-list/admin-pro-list.component';
import { AdminProAddComponent } from './pages/admin/products/admin-pro-add/admin-pro-add.component';
import { AdminProEditComponent } from './pages/admin/products/admin-pro-edit/admin-pro-edit.component';
import { AdminUsersListComponent } from './pages/admin/users/admin-users-list/admin-users-list.component';
import { AdminUsersAddComponent } from './pages/admin/users/admin-users-add/admin-users-add.component';
import { AdminUsersEditComponent } from './pages/admin/users/admin-users-edit/admin-users-edit.component';

import { LoginComponent } from './pages/auths/login/login.component';
import { RegisterComponent } from './pages/auths/register/register.component';
import { ErrorPageComponent } from './comps/error-page/error-page.component';
import { WebsiteComponent } from './comps/layouts/website/website.component';
import { AdminComponent } from './comps/layouts/admin/admin.component';
import { HeaderComponent } from './comps/layouts/website/header/header.component';
import { FooterComponent } from './comps/layouts/website/footer/footer.component';
import { HomeComponent } from './pages/website/home/home.component';
import { NavbarComponent } from './comps/layouts/admin/navbar/navbar.component';
import { AdminHeaderComponent } from './comps/layouts/admin/admin-header/admin-header.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { SlidersListComponent } from './pages/admin/sliders/sliders-list/sliders-list.component';
import { SlidersAddComponent } from './pages/admin/sliders/sliders-add/sliders-add.component';
import { SlidersEditComponent } from './pages/admin/sliders/sliders-edit/sliders-edit.component';
import { SlidersBannerComponent } from './comps/web-comps/sliders-banner/sliders-banner.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SlidersBooksComponent } from './comps/web-comps/sliders-books/sliders-books.component';
import { BreadcrumbComponent } from './comps/breadcrumb/breadcrumb.component';
import {CarouselModule} from 'primeng/carousel';
import { CardDetailComponent } from './comps/web-comps/card-detail/card-detail.component';

registerLocaleData(localeFr);
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AdminProListComponent,
    AdminProAddComponent,
    AdminProEditComponent,
    AdminUsersListComponent,
    AdminUsersAddComponent,
    AdminUsersEditComponent,
    LoginComponent,
    RegisterComponent,
    ErrorPageComponent,
    WebsiteComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    AdminHeaderComponent,
    DashboardComponent,
    CurrencyPipe,
    SlidersListComponent,
    SlidersAddComponent,
    SlidersEditComponent,
    SlidersBannerComponent,
    SlidersBooksComponent,
    BreadcrumbComponent,
    CardDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimeModule,
    MdbModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot(),
    ScrollTopModule,
    GalleriaModule,
    CarouselModule
    
  ],
  providers: [PrimeModule,MessageService, CarouselModule],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
