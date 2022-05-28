import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/features/home/home.component';
import { LoginComponent } from './components/features/login/login.component';
import { ProfileComponent } from './components/features/profile/profile.component';
import { OrderComponent } from './components/features/order/order.component';
import { CartComponent } from './components/features/cart/cart.component';
import { WishlistComponent } from './components/features/wishlist/wishlist.component';
import { MaterialModule } from './components/core/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDataComponent } from './components/features/user-data/user-data.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PageNotFoundComponent } from './components/core/page-not-found/page-not-found.component';
import { SearchTextPipe } from './shared/search-text.pipe';
import { MyInterceptor } from './components/core/retain-interceptor';
import { RetailHeaderComponent } from './shared/retail-header/retail-header.component';
import { SpinnerOverlayComponent } from './components/core/spinner-overlay/spinner-overlay.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    OrderComponent,
    CartComponent,
    WishlistComponent,
    UserDataComponent,
    PageNotFoundComponent,
    RetailHeaderComponent,
    SpinnerOverlayComponent,
    // SearchTextPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
