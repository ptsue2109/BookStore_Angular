import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './comps/error-page/error-page.component';
import { AdminComponent } from './comps/layouts/admin/admin.component';
import { WebsiteComponent } from './comps/layouts/website/website.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminProAddComponent } from './pages/admin/products/admin-pro-add/admin-pro-add.component';
import { AdminProEditComponent } from './pages/admin/products/admin-pro-edit/admin-pro-edit.component';
import { AdminProListComponent } from './pages/admin/products/admin-pro-list/admin-pro-list.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { SlidersAddComponent } from './pages/admin/sliders/sliders-add/sliders-add.component';
import { SlidersEditComponent } from './pages/admin/sliders/sliders-edit/sliders-edit.component';
import { SlidersListComponent } from './pages/admin/sliders/sliders-list/sliders-list.component';
import { AdminUsersAddComponent } from './pages/admin/users/admin-users-add/admin-users-add.component';
import { AdminUsersEditComponent } from './pages/admin/users/admin-users-edit/admin-users-edit.component';
import { AdminUsersListComponent } from './pages/admin/users/admin-users-list/admin-users-list.component';
import { LoginComponent } from './pages/auths/login/login.component';
import { RegisterComponent } from './pages/auths/register/register.component';
import { HomeComponent } from './pages/website/home/home.component';
import { DetailProductsComponent } from './pages/website/products/detail-products/detail-products.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'products',
        children:[
          {
            path: ':slug',
            component: DetailProductsComponent
          }
        ]
      }
    ],
  },  
  { 
    path: "admin",
    component: AdminComponent,
    
    children:[
      {
        path : "",
        component: DashboardComponent
      },
      {
        path: "products",
        component: ProductsComponent,
        children: [
          {
            path: '',
            component: AdminProListComponent
          },
          {
            path: "add",
            component: AdminProAddComponent
          },
          {
            path: ":id",
            component: AdminProEditComponent
          }
        ]
      },
      {
        path: "users",
        children:[
          {
            path: "",
            component: AdminUsersListComponent
          },
          {
            path: "add",
            component : AdminUsersAddComponent
          },
          {
            path: ":id",
            component : AdminUsersEditComponent
          }
        ]
      },
      {
        path: "sliders",
        children:[
          {
            path: "",
            component: SlidersListComponent
          },
          {
            path: "add",
            component : SlidersAddComponent
          },
          {
            path: ":id",
            component : SlidersEditComponent
          }
        ]
      }
    ]
  },
  {
    path: "**",
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
