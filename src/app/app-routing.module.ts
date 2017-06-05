import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BattleGuard} from './battle.guard';
import { PreparingComponent } from './preparing.component';
import { BattleComponent } from './battle.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: '/preparing', pathMatch: 'full', },
    { path: 'preparing',  component: PreparingComponent },
    { path: 'battle',     component: BattleComponent, canActivate: [ BattleGuard ] }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
