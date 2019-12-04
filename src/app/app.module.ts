import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { Material } from '@angular/material/card';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';

import {ResumeComponent} from '../resume/resume.component';
import { BioComponent } from '../bio/bio.component';
import { SocialMediaComponent } from '../socialmedia/socialmedia.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'bio', component: BioComponent },
    { path: 'socialmedia', component: SocialMediaComponent }

  ]) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, ResumeComponent, BioComponent, SocialMediaComponent ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
