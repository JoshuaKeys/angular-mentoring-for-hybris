import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactsModule } from './modules/contacts/contacts.module';
import { HomeModule } from './modules/home/home.module';
import { HomePageComponent } from './modules/home/components/home-page/home-page.component';
import { ContactsComponent } from './modules/contacts/components/contacts/contacts.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ContactsModule,
    HomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
