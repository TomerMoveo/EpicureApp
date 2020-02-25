import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// # Swiper
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG } from 'ngx-swiper-wrapper';

// # routes
import { routingComponents, AppRoutingModule } from './app-routing.module';

// # components
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { PopularResturantsComponent } from './components/popular-resturants/popular-resturants.component';
import { CardSmallComponent } from './components/card-small/card-small.component';
import { SignatureDishComponent } from './components/signature-dish/signature-dish.component';

// # Swiper Descriptions
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 0,
  centeredSlides: true,
  navigation: true,
  // pagination: true,
  // keyboard: true,
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    routingComponents,
    NavigationBarComponent,
    MainContentComponent,
    FooterComponent,
    PopularResturantsComponent,
    CardSmallComponent,
    SignatureDishComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SwiperModule,
    HttpClientModule
  ],
  providers:
  [
    {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }


