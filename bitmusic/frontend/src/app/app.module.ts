import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentIndexComponent } from './components/content-index/content-index.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MenuSongComponent } from './components/menu-song/menu-song.component';
import { PlayerComponent } from './components/player/player.component';
import { SongToolsComponent } from './components/song-tools/song-tools.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentIndexComponent,
    FooterComponent,
    LoginComponent,
    MainMenuComponent,
    MenuSongComponent,
    PlayerComponent,
    SongToolsComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
