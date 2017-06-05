import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreparingRoutingModule } from './preparing-routing.module';
import { PreparingComponent } from './preparing.component';

@NgModule({
    imports: [
        CommonModule,
        PreparingRoutingModule
    ],
    declarations: [PreparingComponent]
})
export class PreparingModule { }
