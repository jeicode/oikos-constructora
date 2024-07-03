import { NgModule } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { HttpInterceptorService } from './core/interceptors/http-interceptor.service';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './shared/components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HeaderComponent,
    FooterComponent
  ],
  providers: [
    [{ provide: APP_BASE_HREF, useValue: '/constructora' }],
    provideHttpClient(withFetch()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
