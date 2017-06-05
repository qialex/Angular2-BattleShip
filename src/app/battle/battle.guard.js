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
var BattleGuard = (function () {
    function BattleGuard(playerService, router) {
        this.playerService = playerService;
        this.router = router;
    }
    BattleGuard.prototype.canActivate = function (route, state) {
        return this.checkPlayerShips();
    };
    BattleGuard.prototype.checkPlayerShips = function () {
        var isAllShipsArePlaced = this.playerService.player.allShipsArePlaced();
        if (!isAllShipsArePlaced) {
            this.router.navigateByUrl('/preparing');
        }
        return isAllShipsArePlaced;
    };
    return BattleGuard;
}());
BattleGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [player_service_1.PlayerService, router_1.Router])
], BattleGuard);
exports.BattleGuard = BattleGuard;
//# sourceMappingURL=battle.guard.js.map