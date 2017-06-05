import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { BattleGuard } from './battle.guard';
import { PlayerService } from './player.service';
import { AppComponent } from './app.component';
import { PreparingComponent } from './preparing.component';
import { BattleComponent } from './battle.component';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    PageNotFoundModule
  ],
  declarations: [
    AppComponent,
    PreparingComponent,
    BattleComponent
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
