import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SupportComponent } from './support/support.component';
import { MuseumComponent } from './museum/museum.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'support', component: SupportComponent },
    { path: 'museum/:id', component: MuseumComponent },
    { path: 'login', component: LoginComponent },
    { path: 'login', component: RegistComponent },
];
