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
var player_1 = require("./player");
var router_1 = require("@angular/router");
require("rxjs/add/operator/filter");
var PlayerService = (function () {
    function PlayerService(router) {
        var _this = this;
        this.player = new player_1.Player();
        this.opponent = new player_1.Player();
        this.turnNumber = 0;
        this.isHumanTurn = true;
        router.events
            .filter(function (event) { return event instanceof router_1.NavigationStart; })
            .subscribe(function (event) {
            if (event.url === '/battle') {
                _this.opponent.randomSet();
                _this.turnNumber = 0;
                _this.isHumanTurn = true;
            }
            if (event.url === '/preparing') {
                _this.player.clearBatte();
            }
        });
    }
    PlayerService.prototype.opponentAI = function () {
        var targets = [];
        var firedTargets = [];
        var finalTarget;
        for (var i = 0; i < this.player.field.length; i++) {
            var row = this.player.field[i];
            for (var j = 0; j < row.length; j++) {
                var square = row[j];
                if (square.isFired && square.isShip) {
                    for (var k = 0; k < square.allNeighbors.length; k++) {
                        if (!square.allNeighbors[k].isFired) {
                            firedTargets.push(square.allNeighbors[k]);
                        }
                    }
                }
                if (!square.isFired) {
                    targets.push(square);
                }
            }
        }
        if (firedTargets.length) {
            finalTarget = firedTargets[Math.floor(Math.random() * firedTargets.length)];
        }
        else {
            var filteredTargets = [];
            var maximunUnfuredNeighbors = 0;
            for (var i = 0; i < targets.length; i++) {
                var unfiredNeighbors = 0;
                for (var j = 0; j < targets[i].allNeighbors.length; j++) {
                    if (!targets[i].allNeighbors[j].isFired) {
                        unfiredNeighbors++;
                    }
                }
                maximunUnfuredNeighbors = Math.max(maximunUnfuredNeighbors, unfiredNeighbors);
            }
            for (var i = 0; i < targets.length; i++) {
                var unfiredNeighbors = 0;
                for (var j = 0; j < targets[i].allNeighbors.length; j++) {
                    if (!targets[i].allNeighbors[j].isFired) {
                        unfiredNeighbors++;
                    }
                }
                if (maximunUnfuredNeighbors === unfiredNeighbors) {
                    filteredTargets.push(targets[i]);
                }
            }
            finalTarget = filteredTargets[Math.floor(Math.random() * filteredTargets.length)];
        }
        return finalTarget;
    };
    PlayerService.prototype.fire = function (square) {
        var _this = this;
        if (!this.isHumanTurn || square.isFired || this.opponent.allShipsAreOnFire() || this.player.allShipsAreOnFire()) {
            return;
        }
        this.turnNumber++;
        this.opponent.getFired(square);
        this.isHumanTurn = false;
        var self = this;
        setTimeout(function () {
            self.player.getFired(_this.opponentAI());
            self.isHumanTurn = true;
        }, 100);
    };
    return PlayerService;
}());
PlayerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], PlayerService);
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map