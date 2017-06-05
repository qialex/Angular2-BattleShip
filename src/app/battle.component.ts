import {Component} from '@angular/core';
import { PlayerService } from './player.service';
import { Player } from './player';

@Component({
    selector: 'app-battle-component',
    templateUrl: './battle.component.html',
    styleUrls: [ './preparing.component.css' ]
})

export class BattleComponent {
    player: Player = this.playerService.player;
    opponent: Player = this.playerService.opponent;
    game: any = this.playerService.game;

    constructor(private playerService: PlayerService) {}
    public onOpponentFieldClick(square: any) {
        this.playerService.fire(square);
    }
}
