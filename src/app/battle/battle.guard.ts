import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    Route
} from '@angular/router';
import { PlayerService } from '../player.service';

@Injectable()
export class BattleGuard implements CanActivate {

    constructor(private playerService: PlayerService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkPlayerShips();
    }
    canLoad(route: Route): boolean {
        return this.checkPlayerShips();
    }

    private checkPlayerShips(): boolean {
        const isAllShipsArePlaced: boolean = this.playerService.player.allShipsArePlaced();

        if (!isAllShipsArePlaced) {
            this.router.navigateByUrl('/preparing');
        }

        return isAllShipsArePlaced;
    }
}
