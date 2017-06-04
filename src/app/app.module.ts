import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule }     from './app-routing.module';

import { BattleGuard } from './battle.guard';
import { PlayerService }  from './player.service';
import { AppComponent }  from './app.component';
import { PreparingComponent }   from './preparing.component';
import { BattleComponent }      from './battle.component';
import { PageNotFoundComponent }  from './page-not-found.component';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PreparingComponent,
    BattleComponent,
    PageNotFoundComponent
  ],
  providers: [
    PlayerService,
    BattleGuard
  ],
  bootstrap:    [
      AppComponent
  ]
})
export class AppModule { }
