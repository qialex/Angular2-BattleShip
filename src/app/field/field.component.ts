import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PlayerService } from '../player.service';
import { Square } from '../model/square';
import { DragndropService } from '../preparing/dragndrop.service';

@Component({
    selector: 'app-field-component',
    templateUrl: './field.component.html',
    styleUrls: [ './field.component.css' ]
})
class FieldComponent  {
    @Input() field: Array<Array<Square>>;
    @Input() showShips: boolean;
    @Input() showFieldBorder: boolean;
    @Input() canFire: boolean;
    @Input() isBattleMode: boolean;
    @Output() rotateShip = new EventEmitter<Square>();

    dragndrop: any = this.dragndropService;

    constructor(private playerService: PlayerService, private dragndropService: DragndropService) {}
    public onOpponentFieldClick(square: Square) {
        if (!this.canFire) {
            return;
        }
        this.playerService.fire(square);
    }
    public onContextMenuOnFieldShip(event: Event, square: Square) {
        event.preventDefault();
        if (this.isBattleMode) {
            return;
        }
        this.rotateShip.emit(square);
    }
}

export class PFieldComponent extends FieldComponent {}
export class BFieldComponent extends FieldComponent {}
