import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArtFormComponent } from './form/art-form/art-form.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
