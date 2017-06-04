import { Injectable }    from '@angular/core';
import { Player } from './player';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';

@Injectable()
export class PlayerService {
  public player: Player = new Player();
  public opponent: Player = new Player();
  public turnNumber: number = 0;
  public isHumanTurn: boolean = true;

  constructor(router: Router) {
    router.events
        .filter(event => event instanceof NavigationStart)
        .subscribe((event: NavigationStart) => {
          if (event.url === '/battle') {
            this.opponent.randomSet();
            this.turnNumber = 0;
            this.isHumanTurn = true;
          }
          if (event.url === '/preparing') {
            this.player.clearBatte();
          }
        });
  }
  private opponentAI() {
    let targets: any = [];
    let firedTargets: any = [];
    let finalTarget: any;

    for (let i = 0; i < this.player.field.length; i++) {
        let row: any = this.player.field[i];
        for (let j = 0; j < row.length; j++) {
            let square: any = row[j];
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
        }
    }

    if (firedTargets.length) {
        finalTarget = firedTargets[Math.floor(Math.random() * firedTargets.length)];
    } else {
        let filteredTargets: any = [];
        let maximunUnfuredNeighbors: number = 0;
        for (let i = 0; i < targets.length; i++) {
            let unfiredNeighbors: number = 0;
            for (let j = 0; j < targets[i].allNeighbors.length; j++) {
                if (!targets[i].allNeighbors[j].isFired) {
                    unfiredNeighbors++;
                }
            }
            maximunUnfuredNeighbors = Math.max(maximunUnfuredNeighbors, unfiredNeighbors);
        }

        for (let i = 0; i < targets.length; i++) {
            let unfiredNeighbors: number = 0;
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
      if (!this.isHumanTurn || square.isFired || this.opponent.allShipsAreOnFire() || this.player.allShipsAreOnFire() ) {
          return;
      }

      this.turnNumber++;
      this.opponent.getFired(square);
      this.isHumanTurn = false;

      const self = this;
      setTimeout(() => {
          self.player.getFired(this.opponentAI());
          self.isHumanTurn = true;
      }, 100);
  }
}
