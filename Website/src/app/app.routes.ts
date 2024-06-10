import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SupportComponent } from './support/support.component';
import { MuseumComponent } from './museum/museum.component';

import { HomeptComponent } from './pt/homept/homept.component';
import { AboutptComponent } from './pt/aboutpt/aboutpt.component';
import { ContactsptComponent } from './pt/contactspt/contactspt.component';
import { SupportptComponent } from './pt/supportpt/supportpt.component';
import { MuseumptComponent } from './pt/museumpt/museumpt.component';

import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'support', component: SupportComponent },
    { path: 'museum/:id', component: MuseumComponent },

    {path: 'pt/home', component: HomeptComponent},
    {path: 'pt', component: HomeptComponent},
    { path: 'pt/about', component: AboutptComponent },
    { path: 'pt/contacts', component: ContactsptComponent },
    { path: 'pt/support', component: SupportptComponent },
    { path: 'pt/museum/:id', component: MuseumptComponent },

    { path: 'login', component: LoginComponent },
    { path: 'regist', component: RegistComponent }
];
