"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var player_service_1 = require("../player.service");
var PreparingComponent = (function () {
    function PreparingComponent(router, playerService, componentElement) {
        this.router = router;
        this.playerService = playerService;
        this.componentElement = componentElement;
        this.player = this.playerService.player;
    }
    PreparingComponent.prototype.onDragStart = function (event, ship) {
        console.log('onDragStart');
        if (!ship) {
            return false;
        }
        this.draggedShip = ship;
        this.player.markShipInAir(this.draggedShip, true);
        if (ship.isOnField) {
            this.player.removeShipFromField(ship);
        }
        var div = document.createElement('div');
        div.style.transform = 'translateX(-1000px)';
        this.componentElement.nativeElement.appendChild(div);
        for (var i = 0; i < ship.blocks.length; i++) {
            var innerDiv = document.createElement('div');
            innerDiv.style.width = 25 + 'px';
            innerDiv.style.height = 25 + 'px';
            innerDiv.style.backgroundSize = 25 + 'px';
            innerDiv.style.backgroundImage = 'url("./img/ship' + ship.blocks.length + '_' + (i + 1) + '.png")';
            innerDiv.style.transform = ship.isVertical ? 'rotate(90deg)' : '';
            innerDiv.style.display = ship.isVertical ? 'block' : 'inline-block';
            div.appendChild(innerDiv);
        }
        event.dataTransfer.setDragImage(div, 75, 75);
        setTimeout(function () { return div.remove(); });
    };
    PreparingComponent.prototype.onDragOver = function (event, square) {
        event.preventDefault();
        this.player.markFieldUnderShip(square, this.draggedShip, true);
    };
    PreparingComponent.prototype.onDragLeave = function (event, square) {
        event.preventDefault();
        this.player.markFieldUnderShip(square, this.draggedShip, false);
    };
    PreparingComponent.prototype.onDrop = function (event, square) {
        console.log('onDrop');
        this.player.tryToPlaceShip(square, this.draggedShip);
        this.player.markShipInAir(this.draggedShip, false);
        this.draggedShip = undefined;
    };
    PreparingComponent.prototype.onDragEnd = function (event) {
        event.preventDefault();
        console.log('onDragEnd');
        if (this.draggedShip) {
            this.player.markShipInAir(this.draggedShip, false);
            this.draggedShip = undefined;
        }
    };
    PreparingComponent.prototype.preventDefault = function (event) {
        event.preventDefault();
        return false;
    };
    PreparingComponent.prototype.onContextMenuOnFieldShip = function (event, square) {
        event.preventDefault();
        this.player.rotateShipOnField(square, undefined);
    };
    PreparingComponent.prototype.onContextMenuOutsideShip = function (event, ship) {
        event.preventDefault();
        this.player.rotateShip(ship);
    };
    return PreparingComponent;
}());
PreparingComponent = __decorate([
    core_1.Component({
        selector: 'preparing-component',
        templateUrl: '../preparing.component.html',
        styleUrls: ['../preparing.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, player_service_1.PlayerService, core_1.ElementRef])
], PreparingComponent);
exports.PreparingComponent = PreparingComponent;
//# sourceMappingURL=preparing.component.js.map