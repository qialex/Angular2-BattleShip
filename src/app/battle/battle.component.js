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
var BattleComponent = (function () {
    function BattleComponent(router, playerService) {
        this.router = router;
        this.playerService = playerService;
        this.player = this.playerService.player;
        this.opponent = this.playerService.opponent;
    }
    BattleComponent.prototype.onOpponentFieldClick = function (square) {
        this.playerService.fire(square);
        this.turnNumber = this.playerService.turnNumber;
    };
    return BattleComponent;
}());
BattleComponent = __decorate([
    core_1.Component({
        selector: 'battle-component',
        templateUrl: '../battle.component.html',
        styleUrls: ['../preparing/preparing.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, player_service_1.PlayerService])
], BattleComponent);
exports.BattleComponent = BattleComponent;
//# sourceMappingURL=battle.component.js.map