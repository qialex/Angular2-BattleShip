import { Component, Input } from '@angular/core';
import { Player } from '../model/player';
import { PlayerService } from '../player.service';
import { Game } from '../model/game';

@Component({
    selector: 'app-controls-component',
    templateUrl: './controls.component.html',
    styleUrls: [ './controls.component.css' ]
})
class ControlsComponent  {
    @Input() type: string;

    player: Player = this.playerService.player;
    opponent: Player = this.playerService.opponent;
    game: Game = this.playerService.game;

    constructor(
        private playerService: PlayerService
    ) {}
}

export class PControlsComponent extends ControlsComponent {}
export class BControlsComponent extends ControlsComponent {}
