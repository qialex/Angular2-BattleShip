import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { Ship } from '../model/ship';
import { Square } from '../model/square';
import { PlayerService } from '../player.service';


@Injectable()
export class DragndropService {
    draggedShip: Ship;
    player: Player = this.playerService.player;

    constructor(private playerService: PlayerService) {}

    onDragStart(event: any, ship: Ship) {

        if (!ship || event.target.getAttribute('draggable') !== 'true') {
            return false;
        }

        this.draggedShip = ship;
        this.draggedShip.isInAir = true;

        if (ship.isOnField) {
            this.player.removeShipFromField(ship);
        }

        this.player.markFieldDisabledForShip(ship);

        const div = document.createElement('div');
        div.style.transform = 'translateX(-1000px)';
        div.style.textAlign = 'left';
        document.body.appendChild(div);
        for (let i = 0; i < ship.blocks.length; i++) {
            const innerDiv = document.createElement('div');
            innerDiv.classList.add('part');
            innerDiv.classList.add('part' + ship.blocks.length + '_' + (i + 1));
            innerDiv.className += (!ship.isVertical || ship.blocks.length === 1 ? ' shipHoriszontal' : '');
            innerDiv.style.transform = ship.isVertical ? 'rotate(90deg)' : '';
            innerDiv.style.display = ship.isVertical ? 'block' : 'inline-block';
            div.appendChild(innerDiv);
        }
        event.dataTransfer.setData('Text', 'Text');
        event.dataTransfer.setDragImage(div, 75 , 75);
        setTimeout(() => div.remove());
    }
    onDragOver(event: Event, square: Square) {
        event.preventDefault();
        this.player.markFieldUnderShip(square, this.draggedShip, true);
    }
    onDragLeave(event: Event, square: Square) {
        event.preventDefault();
        this.player.markFieldUnderShip(square, this.draggedShip, false);
    }
    onDrop(event: Event, square: Square) {
        event.preventDefault();

        this.player.tryToPlaceShip(square, this.draggedShip);
        this.player.unmarkFieldDisabledForShip();
        this.draggedShip.isInAir = false;
        this.draggedShip = undefined;
    }
    onDragEnd(event: Event) {
        event.preventDefault();

        if (this.draggedShip) {
            this.player.unmarkFieldDisabledForShip();
            this.draggedShip.isInAir = false;
            this.draggedShip = undefined;
        }
    }
}
