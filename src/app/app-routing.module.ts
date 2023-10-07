import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { NotFoundComponent } from "./views/not-found/not-found.component";
import { UserDetailComponent } from "./views/user-detail/user-detail.component";
import { UsersListComponent } from "./views/users-list/users-list.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'usuarios',
    component: UsersListComponent,
    children: [{ path: ':id', component: UserDetailComponent }],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
