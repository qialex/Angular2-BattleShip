import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BattleRoutingModule } from './battle-routing.module';
import { BattleComponent } from './battle.component';
import { BFieldComponent } from '../field/field.component';
import { BControlsComponent } from '../controls/controls.component';

@NgModule({
    imports: [
        CommonModule,
        BattleRoutingModule
    ],
    declarations: [
        BattleComponent,
        BFieldComponent,
        BControlsComponent
    ]
})
export class BattleModule { }
