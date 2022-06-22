import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  ɵDEFAULT_LOCALE_ID,
} from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { PrimeModule } from './shared/uiHelpers/prime/Prime.module';
import { MdbModule } from './shared/uiHelpers/mdb/Mdb.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService, MessageService, MenuItem } from 'primeng/api';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyPipe } from './shared/helpers/pipes/currency.pipe';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ToastrModule } from 'ngx-toastr';
import { GalleriaModule } from 'primeng/galleria';
import { ProductsComponent } from './pages/admin/products/products.component';
import { AdminProListComponent } from './pages/admin/products/admin-pro-list/admin-pro-list.component';
import { AdminProAddComponent } from './pages/admin/products/admin-pro-add/admin-pro-add.component';
import { AdminProEditComponent } from './pages/admin/products/admin-pro-edit/admin-pro-edit.component';
import { AdminUsersListComponent } from './pages/admin/users/admin-users-list/admin-users-list.component';
import { AdminUsersAddComponent } from './pages/admin/users/admin-users-add/admin-users-add.component';
import { AdminUsersEditComponent } from './pages/admin/users/admin-users-edit/admin-users-edit.component';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './pages/auths/login/login.component';
import { RegisterComponent } from './pages/auths/register/register.component';
import { ErrorPageComponent } from './comps/web-comps/error-page/error-page.component';
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
import { CarouselModule } from 'primeng/carousel';
import { ValidateMessComponent } from './comps/web-comps/validate-mess/validate-mess.component';
import { CardDetailComponent } from './comps/web-comps/card-detail/card-detail.component';
import { DetailProductsComponent } from './pages/website/products/detail-products/detail-products.component';
import { CartComponent } from './pages/website/cart/cart.component';
import { ProductByCateComponent } from './pages/website/products/product-by-cate/product-by-cate.component';
import { AsidePanelComponent } from './comps/web-comps/aside-panel/aside-panel.component';
import { InfoComponent } from './pages/auths/info/info.component';
import { AdminCateListComponent } from './pages/admin/category/admin-cate-list/admin-cate-list.component';
import { AdminCateAddComponent } from './pages/admin/category/admin-cate-add/admin-cate-add.component';
import { AdminCateEditComponent } from './pages/admin/category/admin-cate-edit/admin-cate-edit.component';
import { AdminAuthorListComponent } from './pages/admin/author/admin-author-list/admin-author-list.component';
import { AdminAuthorAddComponent } from './pages/admin/author/admin-author-add/admin-author-add.component';
import { AdminAuthorEditComponent } from './pages/admin/author/admin-author-edit/admin-author-edit.component';
import { AuthorBookComponent } from './pages/website/products/author-book/author-book.component';
import { SearchbarComponent } from './comps/web-comps/searchbar/searchbar.component';
import { CartOrdersComponent } from './pages/website/cart/cart-orders/cart-orders.component';
import { BookCoverComponent } from './comps/web-comps/book-cover/book-cover.component';
import { TargetBookComponent } from './pages/website/products/target-book/target-book.component';
import { AdminOrdersListComponent } from './pages/admin/orders/admin-orders-list/admin-orders-list.component';
import { AdminOrdersAddComponent } from './pages/admin/orders/admin-orders-add/admin-orders-add.component';
import { OrderDetailComponent } from './pages/website/cart/order-detail/order-detail.component';
import { AdminOrdersEditComponent } from './pages/admin/orders/admin-orders-edit/admin-orders-edit.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';
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
    CardDetailComponent,
    DetailProductsComponent,
    CartComponent,
    ProductByCateComponent,
    AsidePanelComponent,
    InfoComponent,
    AdminCateListComponent,
    AdminCateAddComponent,
    AdminCateEditComponent,
    AdminAuthorListComponent,
    AdminAuthorAddComponent,
    AdminAuthorEditComponent,
    AuthorBookComponent,
    SearchbarComponent,
    CartOrdersComponent,
    BookCoverComponent,
    TargetBookComponent,
    AdminOrdersListComponent,
    AdminOrdersAddComponent,
    OrderDetailComponent,
    AdminOrdersEditComponent,
    ValidateMessComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
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
    CarouselModule,
    SocialLoginModule
  ],
  providers: [
    PrimeModule,
    MessageService,
    CarouselModule,
    ConfirmationService,
    RouterModule,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.GOOGLE_CLIENT_ID
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR' // 'de' for Germany, 'fr' for France ...
    }
  

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
