import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from './shared/components/image/image.component';
import { HomeComponent } from './features/home/home.component';
import { MainComponent } from './features/home/componets/main/main.component';
import { HeroComponent } from './features/home/componets/hero/hero.component';
import { HeaderComponent } from './features/home/componets/header/header.component';
import { GalleryComponent } from './features/home/componets/gallery/gallery.component';
import { ItemComponent } from './features/home/componets/main/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    HomeComponent,
    MainComponent,
    HeroComponent,
    HeaderComponent,
    GalleryComponent,
    ItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
