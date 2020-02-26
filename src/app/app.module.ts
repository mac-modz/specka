import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppbarModule } from './appbar/appbar.module';
import { HomeComponent } from './pages/home/component/home.component';
import { HomeContainerComponent } from './pages/home/container/home-container.component';
import { ErrorComponent } from './pages/error/error.component';

const COMPONENTS = [AppComponent, HomeComponent, HomeContainerComponent, ErrorComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    BrowserModule,
    AppRoutingModule,
      SharedModule,
      AppbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
