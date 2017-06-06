import {Component} from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../model/player';
import { Game } from '../model/game';
import { Square } from '../model/square';

@Component({
    selector: 'app-battle-component',
    templateUrl: './battle.component.html',
    styleUrls: [ './battle.component.css' ]
})

export class BattleComponent {
    player: Player = this.playerService.player;
    opponent: Player = this.playerService.opponent;
    game: Game = this.playerService.game;

    constructor(private playerService: PlayerService) {}
    public onOpponentFieldClick(square: Square) {
        this.playerService.fire(square);
    }
}