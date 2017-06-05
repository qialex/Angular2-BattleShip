import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BattleRoutingModule } from './battle-routing.module';
import { BattleComponent } from './battle.component';

@NgModule({
    imports: [
        CommonModule,
        BattleRoutingModule
    ],
    declarations: [BattleComponent]
})
export class BattleModule { }
