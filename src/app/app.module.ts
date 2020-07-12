import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './layout/layout/layout.module';
import { LoginComponent } from './login/login.component';
import { AuthGaurdService } from './authService/auth-gaurd.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './authService/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    HttpClientModule,
  ],
  providers: [AuthGaurdService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent],
})
export class AppModule {}
