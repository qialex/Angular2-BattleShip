import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattleGuard } from './battle/battle.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/preparing',
        pathMatch: 'full',
    },
    {
        path: 'preparing',
        loadChildren: './preparing/preparing.module#PreparingModule'
    },
    {
        path: 'battle',
        loadChildren: './battle/battle.module#BattleModule',
        canActivate: [ BattleGuard ],
        canLoad: [ BattleGuard ]
    }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
