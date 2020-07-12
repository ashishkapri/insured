import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../../modules/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
