import { Component } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../model/player';
import { Square } from '../model/square';

@Component({
    selector: 'app-preparing-component',
    templateUrl: './preparing.component.html',
    styleUrls: [ './preparing.component.css' ]
})
export class PreparingComponent  {

    player: Player = this.playerService.player;

    constructor(
        private playerService: PlayerService
    ) {}

    public preventDefault(event: Event) {
        event.preventDefault();
        return false;
    }
    public rotateShipOnF(square: Square) {
        this.player.rotateShipOnField(square, undefined);
    }
}
