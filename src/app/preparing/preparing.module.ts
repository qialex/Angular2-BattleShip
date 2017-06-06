import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreparingRoutingModule } from './preparing-routing.module';
import { PreparingComponent } from './preparing.component';
import { ShipsComponent } from './ships/ships.component';
import { DragndropService } from './dragndrop.service';
import { PFieldComponent } from '../field/field.component';
import { PControlsComponent } from '../controls/controls.component';

@NgModule({
    imports: [
        CommonModule,
        PreparingRoutingModule
    ],
    declarations: [
        PreparingComponent,
        ShipsComponent,
        PFieldComponent,
        PControlsComponent
    ],
    providers: [
        DragndropService
    ]
})
export class PreparingModule { }
