import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './pages/body/body.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { LikedSongsComponent } from './components/liked-songs/liked-songs.component';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecentlyPlayedComponent } from './components/recently-played/recently-played.component';
import { FavArtistsComponent } from './components/fav-artists/fav-artists.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { ThemeService } from './services/theme.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    SidenavComponent,
    ArtistsComponent,
    AlbumsComponent,
    LikedSongsComponent,
    RecentlyPlayedComponent,
    FavArtistsComponent,
    NowPlayingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    CdkMenuModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
