import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreparingComponent } from './preparing.component';

const routes: Routes = [
    { path: '', component: PreparingComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PreparingRoutingModule { }
