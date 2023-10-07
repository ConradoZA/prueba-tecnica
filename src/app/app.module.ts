import es from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { es_ES } from "ng-zorro-antd/i18n";
import { NzListModule } from "ng-zorro-antd/list";
import { NzTableModule } from "ng-zorro-antd/table";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./views/home/home.component";
import { NotFoundComponent } from "./views/not-found/not-found.component";
import { UserDetailComponent } from "./views/user-detail/user-detail.component";
import { UsersListComponent } from "./views/users-list/users-list.component";

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    UsersListComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzListModule,
    NzTableModule,
    NzDividerModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent],
})
export class AppModule {}
