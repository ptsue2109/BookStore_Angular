import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './comps/error-page/error-page.component';
import { AdminComponent } from './comps/layouts/admin/admin.component';
import { WebsiteComponent } from './comps/layouts/website/website.component';
import { AdminAuthorAddComponent } from './pages/admin/author/admin-author-add/admin-author-add.component';
import { AdminAuthorEditComponent } from './pages/admin/author/admin-author-edit/admin-author-edit.component';
import { AdminAuthorListComponent } from './pages/admin/author/admin-author-list/admin-author-list.component';
import { AdminCateAddComponent } from './pages/admin/category/admin-cate-add/admin-cate-add.component';
import { AdminCateEditComponent } from './pages/admin/category/admin-cate-edit/admin-cate-edit.component';
import { AdminCateListComponent } from './pages/admin/category/admin-cate-list/admin-cate-list.component';
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
import { InfoComponent } from './pages/auths/info/info.component';
import { LoginComponent } from './pages/auths/login/login.component';
import { RegisterComponent } from './pages/auths/register/register.component';
import { CartComponent } from './pages/website/cart/cart.component';
import { HomeComponent } from './pages/website/home/home.component';
import { AuthorBookComponent } from './pages/website/products/author-book/author-book.component';
import { DetailProductsComponent } from './pages/website/products/detail-products/detail-products.component';
import { ProductByCateComponent } from './pages/website/products/product-by-cate/product-by-cate.component';
import { AuthGuard } from './shared/helpers/guard/auth.guard';
import {LoginGuardGuard} from "./shared/helpers/guard/login-guard.guard"
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
        path: "infomation",
        component: InfoComponent
      },
      {
        path: "collections/authors/:slug",
        component: AuthorBookComponent
      },
      {
        path: "categories/:slug",
        component: ProductByCateComponent
      },
      {
        path: "carts",
        canActivate:[LoginGuardGuard],
        component: CartComponent
      },
      {
        path: 'products',
        children:[
          {
            path: "",
            component: ProductByCateComponent
          },
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
    canActivate:[LoginGuardGuard,AuthGuard],
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
      },
      {
        path: "categories",
        children:[
          {
            path: "",
            component: AdminCateListComponent
          },
          {
            path: "add",
            component: AdminCateAddComponent
          },
          {
            path: ":id",
            component: AdminCateEditComponent
          },
          
        ]
      },
      {
        path: "authors",
        children:[
          {
            path: "",
            component: AdminAuthorListComponent,
          },
          {
            path: "add",
            component: AdminAuthorAddComponent
          },
          {
            path: ":id",
            component: AdminAuthorEditComponent
          },
          
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
  providers: [AuthGuard,LoginGuardGuard]
})
export class AppRoutingModule {}
