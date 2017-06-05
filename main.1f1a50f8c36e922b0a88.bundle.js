webpackJsonp([1,4],{126:function(e,t,r){"use strict";var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),s=r(455),a=r(86);r(612);var l=function(){function e(e){var t=this;this.player=new s.Player,this.opponent=new s.Player,this.game={turnNumber:0,isHumanTurn:!0},this.turnNumber=0,this.isHumanTurn=!0,e.events.filter(function(e){return e instanceof a.NavigationStart}).subscribe(function(e){"/battle"===e.url&&(t.opponent.randomSet(),t.turnNumber=0,t.isHumanTurn=!0),"/preparing"===e.url&&t.player.clearBatte()})}return e.prototype.opponentAI=function(){for(var e,t=[],r=[],i=0;i<this.player.field.length;i++)for(var n=this.player.field[i],o=0;o<n.length;o++){var s=n[o];if(s.isFired&&s.isShip)for(var a=0;a<s.allNeighbors.length;a++)s.allNeighbors[a].isFired||r.push(s.allNeighbors[a]);s.isFired||t.push(s)}if(r.length)e=r[Math.floor(Math.random()*r.length)];else{for(var l=[],p=0,i=0;i<t.length;i++){for(var h=0,o=0;o<t[i].allNeighbors.length;o++)t[i].allNeighbors[o].isFired||h++;p=Math.max(p,h)}for(var i=0;i<t.length;i++){for(var h=0,o=0;o<t[i].allNeighbors.length;o++)t[i].allNeighbors[o].isFired||h++;p===h&&l.push(t[i])}e=l[Math.floor(Math.random()*l.length)]}return e},e.prototype.fire=function(e){var t=this;if(this.isHumanTurn&&!e.isFired&&!this.opponent.allShipsAreOnFire()&&!this.player.allShipsAreOnFire()){this.turnNumber++,this.opponent.getFired(e),this.isHumanTurn=!1,this.game.isHumanTurn=!1;var r=this;setTimeout(function(){r.player.getFired(t.opponentAI()),r.isHumanTurn=!0,t.game.isHumanTurn=!0},100)}},e=i([o.Injectable(),n("design:paramtypes",["function"==typeof(t=void 0!==a.Router&&a.Router)&&t||Object])],e);var t}();t.PlayerService=l},282:function(e,t,r){"use strict";var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),s=r(86),a=r(126),l=function(){function e(e,t){this.router=e,this.playerService=t,this.player=this.playerService.player,this.opponent=this.playerService.opponent,this.turnNumber=0,this.game=this.playerService.game}return e.prototype.onOpponentFieldClick=function(e){this.playerService.fire(e),this.turnNumber=this.playerService.turnNumber},e=i([o.Component({selector:"app-battle-component",template:r(607),styles:[r(323)]}),n("design:paramtypes",["function"==typeof(t=void 0!==s.Router&&s.Router)&&t||Object,"function"==typeof(l=void 0!==a.PlayerService&&a.PlayerService)&&l||Object])],e);var t,l}();t.BattleComponent=l},283:function(e,t,r){"use strict";var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),s=r(86),a=r(126),l=function(){function e(e,t){this.playerService=e,this.router=t}return e.prototype.canActivate=function(e,t){return this.checkPlayerShips()},e.prototype.checkPlayerShips=function(){var e=this.playerService.player.allShipsArePlaced();return e||this.router.navigateByUrl("/preparing"),e},e=i([o.Injectable(),n("design:paramtypes",["function"==typeof(t=void 0!==a.PlayerService&&a.PlayerService)&&t||Object,"function"==typeof(r=void 0!==s.Router&&s.Router)&&r||Object])],e);var t,r}();t.BattleGuard=l},284:function(e,t,r){"use strict";var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),s=r(123),a=function(){function e(e){this.title=e}return e.prototype.ngOnInit=function(){this.title.setTitle("404 Not Found")},e=i([o.Component({template:"\n        <h2>404 Not Found</h2>\n    "}),n("design:paramtypes",["function"==typeof(t=void 0!==s.Title&&s.Title)&&t||Object])],e);var t}();t.PageNotFoundComponent=a},285:function(e,t,r){"use strict";var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),s=r(86),a=r(126),l=function(){function e(e,t,r){this.router=e,this.playerService=t,this.componentElement=r,this.player=this.playerService.player}return e.prototype.onDragStart=function(e,t){if(!t)return!1;this.draggedShip=t,this.player.markShipInAir(this.draggedShip,!0),t.isOnField&&this.player.removeShipFromField(t);var r=document.createElement("div");r.style.transform="translateX(-1000px)",r.style.textAlign="left",this.componentElement.nativeElement.appendChild(r);for(var i=0;i<t.blocks.length;i++){var n=document.createElement("div");n.style.width="25px",n.style.height="25px",n.style.backgroundSize="25px",n.classList.add("part"+t.blocks.length+"_"+(i+1)),n.className+=t.isVertical&&1!==t.blocks.length?"":" shipHoriszontal",n.style.transform=t.isVertical?"rotate(90deg)":"",n.style.display=t.isVertical?"block":"inline-block",r.appendChild(n)}e.dataTransfer.setDragImage(r,75,75),setTimeout(function(){return r.remove()})},e.prototype.onDragOver=function(e,t){e.preventDefault(),this.player.markFieldUnderShip(t,this.draggedShip,!0)},e.prototype.onDragLeave=function(e,t){e.preventDefault(),this.player.markFieldUnderShip(t,this.draggedShip,!1)},e.prototype.onDrop=function(e,t){this.player.tryToPlaceShip(t,this.draggedShip),this.player.markShipInAir(this.draggedShip,!1),this.draggedShip=void 0},e.prototype.onDragEnd=function(e){e.preventDefault(),this.draggedShip&&(this.player.markShipInAir(this.draggedShip,!1),this.draggedShip=void 0)},e.prototype.preventDefault=function(e){return e.preventDefault(),!1},e.prototype.onContextMenuOnFieldShip=function(e,t){e.preventDefault(),this.player.rotateShipOnField(t,void 0)},e.prototype.onContextMenuOutsideShip=function(e,t){e.preventDefault(),this.player.rotateShip(t)},e=i([o.Component({selector:"app-preparing-component",template:r(608),styles:[r(323)]}),n("design:paramtypes",["function"==typeof(t=void 0!==s.Router&&s.Router)&&t||Object,"function"==typeof(l=void 0!==a.PlayerService&&a.PlayerService)&&l||Object,"function"==typeof(p=void 0!==o.ElementRef&&o.ElementRef)&&p||Object])],e);var t,l,p}();t.PreparingComponent=l},323:function(e,t){e.exports=""},343:function(e,t){function r(e){throw new Error("Cannot find module '"+e+"'.")}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=343},344:function(e,t,r){"use strict";var i=r(422),n=r(454);i.platformBrowserDynamic().bootstrapModule(n.AppModule)},452:function(e,t,r){"use strict";var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),s=r(86),a=r(283),l=r(285),p=r(282),h=r(284),c=[{path:"",redirectTo:"/preparing",pathMatch:"full"},{path:"preparing",component:l.PreparingComponent},{path:"battle",component:p.BattleComponent,canActivate:[a.BattleGuard]},{path:"**",component:h.PageNotFoundComponent}],u=function(){function e(){}return e=i([o.NgModule({imports:[s.RouterModule.forRoot(c)],exports:[s.RouterModule]}),n("design:paramtypes",[])],e)}();t.AppRoutingModule=u},453:function(e,t,r){"use strict";var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),s=function(){function e(){this.text="Angular Sea Battle game by qiAlex"}return e=i([o.Component({selector:"my-app",template:"\n      <h1>{{text}}</h1>\n      <router-outlet></router-outlet>\n  "}),n("design:paramtypes",[])],e)}();t.AppComponent=s},454:function(e,t,r){"use strict";var i=this&&this.__decorate||function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),s=r(123),a=r(452),l=r(283),p=r(126),h=r(453),c=r(285),u=r(282),f=r(284),d=function(){function e(){}return e=i([o.NgModule({imports:[s.BrowserModule,a.AppRoutingModule],declarations:[h.AppComponent,c.PreparingComponent,u.BattleComponent,f.PageNotFoundComponent],providers:[p.PlayerService,l.BattleGuard],bootstrap:[h.AppComponent]}),n("design:paramtypes",[])],e)}();t.AppModule=d},455:function(e,t,r){"use strict";var i=function(){function e(){var e=this;this.ships=[],this.field=[],this.shipsBySize=[],this.shipsOnField=0,this.firedBlockCountTotal=0;for(var t=1;t<5;t++){this.shipsBySize.push([]);for(var r=0;r<t;r++)this.ships.push({blocks:Array(5-t).fill([void 0,void 0]),firedBlockCount:0,isVertical:!1,isOnField:!1,isInAir:!1,isOnfire:!1,isDrowned:!1}),this.shipsBySize[t-1].push(this.ships[this.ships.length-1])}this.shipsBySize=this.shipsBySize.reverse();for(var t=0;t<10;t++){this.field.push([]);for(var r=0;r<10;r++)this.field[t].push({x:t,y:r,isShip:!1,isUnderShip:!1,isNeighborOfShip:!1,isFired:!1,allNeighbors:[],diagonalNeighbors:[],verticalNeighbors:[],horizontalNeighbors:[],linearNeighbors:[],ship:void 0,blockNum:void 0})}this.field.map(function(t,r){return t.map(function(t,i){return e.calculateNeighbors(t,r,i)})})}return e.prototype.calculateNeighbors=function(e,t,r){var i=this;[[t-1,r-1],[t-1,r],[t-1,r+1],[t,r-1],[t,r+1],[t+1,r-1],[t+1,r],[t+1,r+1]].map(function(t,r){i.field[t[0]]&&i.field[t[0]][t[1]]&&(e.allNeighbors.push(i.field[t[0]][t[1]]),[0,2,5,7].indexOf(r)>-1&&e.diagonalNeighbors.push(i.field[t[0]][t[1]]),[1,3,4,6].indexOf(r)>-1&&e.linearNeighbors.push(i.field[t[0]][t[1]]),[1,6].indexOf(r)>-1&&e.verticalNeighbors.push(i.field[t[0]][t[1]]),[3,4].indexOf(r)>-1&&e.horizontalNeighbors.push(i.field[t[0]][t[1]]))})},e.prototype.getPlacesForDraggedShip=function(e,t){if(!t||!e)return[];var r=e.x,i=e.y,n=[];if(t.isVertical){for(var o=r+(t.blocks.length-1);o>=r-(t.blocks.length-1);o--)if(this.field[o]&&(this.field[o][i].isShip||this.field[o][i].isNeighborOfShip?n=[]:n.push(this.field[o][i]),n.length===t.blocks.length))return n.reverse()}else for(var o=i+(t.blocks.length-1);o>=i-(t.blocks.length-1);o--)if(this.field[r][o]&&(this.field[r][o].isShip||this.field[r][o].isNeighborOfShip?n=[]:n.push(this.field[r][o]),n.length===t.blocks.length))return n.reverse();return[]},e.prototype.tryToPlaceShip=function(e,t){var r=this.getPlacesForDraggedShip(e,t);r.length&&this.placeShip(r,t)},e.prototype.placeShip=function(e,t){for(var r=0;r<e.length;r++){e[r].isShip=!0,e[r].isUnderShip=!1,e[r].ship=t,e[r].blockNum=r,t.blocks[r]=[e[r].x,e[r].y];for(var i=0;i<e[r].allNeighbors.length;i++)e[r].allNeighbors[i].isShip||(e[r].allNeighbors[i].isNeighborOfShip=!0)}this.shipsOnField++,t.isOnField=!0},e.prototype.removeShipFromField=function(e){e.isOnField=!1,this.shipsOnField--;for(var t=0;t<e.blocks.length;t++){var r=e.blocks[t],i=this.field[r[0]][r[1]];i.isShip=!1,i.ship=void 0,i.blockNum=void 0;for(var n=0;n<i.allNeighbors.length;n++){for(var o=0,s=0;s<i.allNeighbors[n].allNeighbors.length;s++)i.allNeighbors[n].allNeighbors[s].isShip&&o++;o||(i.allNeighbors[n].isNeighborOfShip=!1)}}},e.prototype.markFieldUnderShip=function(e,t,r){var i=this;this.getPlacesForDraggedShip(e,t).map(function(e){return i.field[e.x][e.y].isUnderShip=r})},e.prototype.markShipInAir=function(e,t){e.isInAir=t},e.prototype.rotateShip=function(e){e.isVertical=!e.isVertical},e.prototype.rotateShipOnField=function(e,t){if(e.ship&&1!==e.ship.blocks.length){var r,i,n=e.ship;e.ship.blocks.map(function(t,n){t[0]===e.x&&t[1]===e.y&&(r=t,i=n)});var o=n.isVertical?[r[0],r[1]-i]:[r[0]-i,r[1]];o=[Math.min(Math.max(o[0],0),10),Math.min(Math.max(o[1],0),10)],this.removeShipFromField(n),this.rotateShip(n);var s=this.getPlacesForDraggedShip(this.field[o[0]][o[1]],n);if(s.length)this.placeShip(s,n);else{this.rotateShip(n);var a=this.field[n.blocks[0][0]][n.blocks[0][1]],l=this.getPlacesForDraggedShip(a,n);if(this.placeShip(l,n),t)t.splice(0,1);else{t=[];for(var p=1;p<=2;p++)n.blocks[i-p]&&t.push(n.blocks[i-p]),n.blocks[i+p]&&t.push(n.blocks[i+p])}t.length&&this.rotateShipOnField(this.field[t[0][0]][t[0][1]],t)}}},e.prototype.randomSet=function(){var e=this;this.allShipsArePlaced()&&this.clearField(),this.ships.map(function(t,r){if(!t.isOnField){e.ships[r].isVertical=Math.random()>.5,e.ships[r].isOnField=!0;var i=[];e.field.map(function(r){return r.map(function(r){var n=e.getPlacesForDraggedShip(r,t);n.length&&i.push({places:n})})});var n=i[Math.floor(Math.random()*i.length)];e.placeShip(n.places,t)}})},e.prototype.clearField=function(){this.constructor()},e.prototype.clearBatte=function(){var e=this;this.firedBlockCountTotal=0,this.field.map(function(t,r){return t.map(function(t,i){e.field[r][i].isFired=!1})}),this.ships.map(function(e){e.firedBlockCount=0})},e.prototype.allShipsArePlaced=function(){return 10===this.shipsOnField},e.prototype.allShipsAreOnFire=function(){return 20===this.firedBlockCountTotal},e.prototype.areAllBlocksFired=function(e){return e.blocks.length===e.firedBlockCount},e.prototype.getFired=function(e){if(!e.isFired&&(e.isFired=!0,e.isShip)){this.firedBlockCountTotal++;for(var t=0;t<e.diagonalNeighbors.length;t++)e.diagonalNeighbors[t].isFired=!0;var r=e.ship;if(r.firedBlockCount++,this.areAllBlocksFired(r))for(var t=0;t<r.blocks.length;t++)for(var i=r.blocks[t],n=this.field[i[0]][i[1]],o=0;o<n.allNeighbors.length;o++)n.allNeighbors[o].isFired=!0}},e}();t.Player=i},607:function(e,t){e.exports='<div class="fieldBg">\r\n    <div class="shipControls">\r\n        <button class="turnIndicator" [ngClass]="{ active: !game.isHumanTurn }">\r\n            <span *ngIf="!player.allShipsAreOnFire() && !opponent.allShipsAreOnFire()">{{20 - player.firedBlockCountTotal}}</span>\r\n            <span *ngIf="player.allShipsAreOnFire()">Lost</span>\r\n            <span *ngIf="opponent.allShipsAreOnFire()">Win</span>\r\n        </button>\r\n        <button class="turnCounter">Turn: <b>{{turnNumber || 0}}</b></button>\r\n        <button class="turnIndicator" [ngClass]="{ active: game.isHumanTurn }">\r\n            <span *ngIf="!player.allShipsAreOnFire() && !opponent.allShipsAreOnFire()">{{20 - opponent.firedBlockCountTotal}}</span>\r\n            <span *ngIf="player.allShipsAreOnFire()">Win</span>\r\n            <span *ngIf="opponent.allShipsAreOnFire()">Lost</span>\r\n        </button>\r\n    </div>\r\n    <div class="field fieldBorder">\r\n        <div *ngFor="let row of player.field" class="row">\r\n            <div *ngFor="let square of row"\r\n                 class="square"\r\n                 [ngClass]="{\r\n                    placedShip: square.isShip,\r\n                    shipIsOnFire: square.isShip && square.isFired,\r\n                    fieldIsOnFire: !square.isShip && square.isFired\r\n                 }">\r\n                <div *ngIf="square.isShip" class="part part{{square.ship.blocks.length}}_{{ square.blockNum + 1}}"\r\n                     [ngClass]="{ shipHoriszontal: square.ship && square.ship.blocks.length === 1 || square.isShip && !square.ship.isVertical }">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="field">\r\n        <div *ngFor="let row of opponent.field" class="row">\r\n            <div *ngFor="let square of row"\r\n                 class="square"\r\n                 [ngClass]="{\r\n                    placedShip: square.isShip,\r\n                    shipIsOnFire: square.isShip && square.isFired,\r\n                    fieldIsOnFire: !square.isShip && square.isFired\r\n                 }"\r\n                 (click)="onOpponentFieldClick(square)">\r\n                <div *ngIf="square.isShip && (opponent.areAllBlocksFired(square.ship) || player.allShipsAreOnFire())" class="part part{{square.ship.blocks.length}}_{{ square.blockNum + 1}}"\r\n                     [ngClass]="{ shipHoriszontal: square.ship && square.ship.blocks.length === 1 || square.isShip && !square.ship.isVertical }">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="shipControls">\r\n        <button routerLink="/preparing">Quit</button>\r\n    </div>\r\n</div>'},608:function(e,t){e.exports='<div (selectstart)="preventDefault($event)">\r\n\r\n    <div class="fieldBg">\r\n        <div class="shipControls">\r\n            <button (click)="player.randomSet()">Random</button>\r\n            <button routerLink="/battle" [disabled]="!player.allShipsArePlaced()">Start!</button>\r\n            <button (click)="player.clearField()" [disabled]="!player.shipsOnField">Clear</button>\r\n        </div>\r\n        <div class="field">\r\n            <div *ngFor="let row of player.field" class="row">\r\n                <div *ngFor="let square of row"\r\n                     class="square"\r\n                     [ngClass]="{\r\n                        closedForShip: !player.getPlacesForDraggedShip(square, draggedShip).length && draggedShip,\r\n                        placedShip: square.isShip,\r\n                        prePlacedShip: square.isUnderShip\r\n                     }"\r\n                     draggable="true"\r\n                     (drop)="onDrop($event, square)"\r\n                     (dragstart)="onDragStart($event, square.ship)"\r\n                     (dragover)="onDragOver($event, square)"\r\n                     (dragleave)="onDragLeave($event, square)"\r\n                     (dragend)="onDragEnd($event)"\r\n                     (contextmenu)="onContextMenuOnFieldShip($event, square)">\r\n                    <div *ngIf="square.isShip" class="part part{{square.ship.blocks.length}}_{{ square.blockNum + 1}}"\r\n                         [ngClass]="{ shipHoriszontal: square.ship && square.ship.blocks.length === 1 || square.isShip && !square.ship.isVertical }">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="shipControls">\r\n            <button class="rotateHint">\r\n                <sup>*</sup>Use <b>right click</b> to <b>rotate</b> a ship.\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class="ships" (contextmenu)="preventDefault($event)">\r\n        <div *ngFor="let shipBlock of player.shipsBySize; let i = index;" class="column height{{i + 1}}">\r\n            <div class="sizeLabel">{{i + 1}}</div>\r\n            <div *ngFor="let ship of shipBlock"\r\n                 class="ship ship_{{ship.blocks.length}} size{{ship.blocks.length}}"\r\n                 draggable="true"\r\n                 (dragstart)="onDragStart($event, ship)"\r\n                 (dragend)="onDragEnd($event)"\r\n                 [ngClass]="{\r\n                    opacity50: ship.isInAir\r\n                 }"\r\n                 (contextmenu)="onContextMenuOutsideShip($event, ship)">\r\n\r\n                <div *ngFor="let part of ship.blocks; let blockNum = index;"\r\n                     class="part part{{ship.blocks.length}}_{{blockNum + 1}}"\r\n                     [ngClass]="{\r\n                        hidden: ship.isOnField,\r\n                        shipHoriszontal: !ship.isVertical || ship.blocks.length === 1\r\n                     }">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n'},624:function(e,t,r){e.exports=r(344)}},[624]);