import { Injectable } from '@angular/core';
import { Player } from './model/player';
import { Game } from './model/game';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';

@Injectable()
export class PlayerService {
  public player: Player = new Player();
  public opponent: Player = new Player();
  public game: Game;

  constructor(router: Router) {
    router.events
        .filter(event => event instanceof NavigationStart)
        .subscribe((event: NavigationStart) => {
          if (event.url === '/battle') {
            this.opponent.randomSet();
            this.game = new Game();
          }
          if (event.url === '/preparing') {
            this.player.clearBatte();
          }
        });
  }
  private opponentAI() {
    const targets: any = [];
    const firedTargets: any = [];
    let finalTarget: any;

    this.player.field.map((row: any) => row.map((square: any) => {
        if (square.isFired && square.isShip) {
            for (let k = 0;  k < square.allNeighbors.length; k++) {
                if (!square.allNeighbors[k].isFired) {
                    firedTargets.push(square.allNeighbors[k]);
                }
            }
        }
        if (!square.isFired) {
            targets.push(square);
        }
    }));

    if (firedTargets.length) {
        finalTarget = firedTargets[Math.floor(Math.random() * firedTargets.length)];
    } else {
        const filteredTargets: any = [];
        let maximunUnfuredNeighbors = 0;
        for (let i = 0; i < targets.length; i++) {
            let unfiredNeighbors = 0;
            for (let j = 0; j < targets[i].allNeighbors.length; j++) {
                if (!targets[i].allNeighbors[j].isFired) {
                    unfiredNeighbors++;
                }
            }
            maximunUnfuredNeighbors = Math.max(maximunUnfuredNeighbors, unfiredNeighbors);
        }

        for (let i = 0; i < targets.length; i++) {
            let unfiredNeighbors = 0;
            for (let j = 0; j < targets[i].allNeighbors.length; j++) {
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
  }
  public fire (square: any) {
      if (!this.game.isHumanTurn || square.isFired || this.opponent.allShipsAreOnFire() || this.player.allShipsAreOnFire() ) {
          return;
      }

      this.game.turnNumber++;
      this.opponent.getFired(square);

      if (this.opponent.allShipsAreOnFire()) {
          return;
      }

      this.game.isHumanTurn = false;

      const self = this;
      setTimeout(() => {
          self.player.getFired(this.opponentAI());
          self.game.isHumanTurn = true;
      }, 150);
  }
}
