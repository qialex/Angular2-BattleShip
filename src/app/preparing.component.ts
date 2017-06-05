import {Component, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from './player.service';
import { Player } from './model/player';
import { Ship } from './model/ship';
import { Square } from './model/square';

@Component({
    selector: 'app-preparing-component',
    templateUrl: './preparing.component.html',
    styleUrls: [ './preparing.component.css' ]
})
export class PreparingComponent  {

    draggedShip: Ship;
    player: Player = this.playerService.player;

    constructor(private router: Router, private playerService: PlayerService, private componentElement: ElementRef) {}

    onDragStart(event: any, ship: Ship) {
        // console.log('onDragStart');
        if (!ship) {
            return false;
        }

        this.draggedShip = ship;
        this.draggedShip.isInAir = true;

        if (ship.isOnField) {
            this.player.removeShipFromField(ship);
        }

        const div = document.createElement('div');
        div.style.transform = 'translateX(-1000px)';
        div.style.textAlign = 'left';
        this.componentElement.nativeElement.appendChild(div);
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
        // console.log('onDrop');

        this.player.tryToPlaceShip(square, this.draggedShip);
        this.draggedShip.isInAir = false;

        this.draggedShip = undefined;
    }
    onDragEnd(event: Event) {
        event.preventDefault();
        // console.log('onDragEnd');

        if (this.draggedShip) {
            this.draggedShip.isInAir = false;
            this.draggedShip = undefined;
        }
    }
    public preventDefault(event: Event) {
        event.preventDefault();
        return false;
    }
    public onContextMenuOnFieldShip(event: Event, square: Square) {
        event.preventDefault();
        this.player.rotateShipOnField(square, undefined);
    }
    public onContextMenuOutsideShip(event: Event, ship: Ship) {
        event.preventDefault();
        ship.rotate();
    }
}
