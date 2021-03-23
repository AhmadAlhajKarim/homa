import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { YearOverviewComponent } from './components/year-overview/year-overview.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './about/about.component';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, HomeComponent, YearOverviewComponent, ContactComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzLayoutModule,
    NzImageModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzCarouselModule,
    NzCardModule,
    NzListModule,
    NzGridModule,
    NzCollapseModule,
    ReactiveFormsModule,

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
