import { Component, Input } from '@angular/core';
import { Ship } from '../../model/ship';
import { DragndropService } from '../dragndrop.service';

@Component({
    selector: 'app-ships-component',
    templateUrl: './ships.component.html',
    styleUrls: [ './ships.component.css' ]
})
export class ShipsComponent  {
    @Input() shipsBySize: Array<Array<Ship>>;
    dragndrop: any = this.dragndropService;

    constructor(
        private dragndropService: DragndropService,
    ) {}

    public preventDefault(event: Event) {
        event.preventDefault();
        return false;
    }
    public onContextMenuOutsideShip(event: Event, ship: Ship) {
        event.preventDefault();
        ship.rotate();
    }
}
