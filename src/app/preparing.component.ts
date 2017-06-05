import {Component, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from './player.service';
import { Player } from './player';

@Component({
    selector: 'app-preparing-component',
    templateUrl: './preparing.component.html',
    styleUrls: [ './preparing.component.css' ]
})
export class PreparingComponent  {

    draggedShip: any;
    player: Player = this.playerService.player;

    constructor(private router: Router, private playerService: PlayerService, private componentElement: ElementRef) {}

    onDragStart(event: any, ship: any) {
        // console.log('onDragStart');
        if (!ship) {
            return false;
        }

        this.draggedShip = ship;
        this.player.markShipInAir(this.draggedShip, true);

        if (ship.isOnField) {
            this.player.removeShipFromField(ship);
        }

        const div = document.createElement('div');
        div.style.transform = 'translateX(-1000px)';
        div.style.textAlign = 'left';
        this.componentElement.nativeElement.appendChild(div);
        for (let i = 0; i < ship.blocks.length; i++) {
            const innerDiv = document.createElement('div');
            innerDiv.style.width = 25 + 'px';
            innerDiv.style.height = 25 + 'px';
            innerDiv.style.backgroundSize = 25 + 'px';
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
    onDragOver(event: any, square: any) {
        event.preventDefault();
        this.player.markFieldUnderShip(square, this.draggedShip, true);
    }
    onDragLeave(event: any, square: any) {
        event.preventDefault();
        this.player.markFieldUnderShip(square, this.draggedShip, false);
    }
    onDrop(event: any, square: any) {
        event.preventDefault();
        // console.log('onDrop');

        this.player.tryToPlaceShip(square, this.draggedShip);
        this.player.markShipInAir(this.draggedShip, false);

        this.draggedShip = undefined;
    }
    onDragEnd(event: any) {
        event.preventDefault();
        // console.log('onDragEnd');

        if (this.draggedShip) {
            this.player.markShipInAir(this.draggedShip, false);
            this.draggedShip = undefined;
        }
    }
    public preventDefault(event: Event) {
        event.preventDefault();
        return false;
    }
    public onContextMenuOnFieldShip(event: Event, square: any) {
        event.preventDefault();
        this.player.rotateShipOnField(square, undefined);
    }
    public onContextMenuOutsideShip(event: Event, ship: any) {
        event.preventDefault();
        this.player.rotateShip(ship);
    }
}
