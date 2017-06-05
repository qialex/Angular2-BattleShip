import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { BattleGuard } from './battle/battle.guard';
import { PlayerService } from './player.service';
import { AppComponent } from './app.component';

import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { PreparingModule } from './preparing/preparing.module';
import { BattleModule } from './battle/battle.module';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    PageNotFoundModule,
    PreparingModule,
    BattleModule
  ],
  declarations: [
    AppComponent
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
