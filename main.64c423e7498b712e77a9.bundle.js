webpackJsonp([1,4],{182:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),a=r(60),s=function(){function e(e){this.playerService=e,this.player=this.playerService.player}return e.prototype.onDragStart=function(e,t){if(!t||"true"!==e.target.getAttribute("draggable"))return!1;this.draggedShip=t,this.draggedShip.isInAir=!0,t.isOnField&&this.player.removeShipFromField(t),this.player.markFieldDisabledForShip(t);var r=document.createElement("div");r.style.transform="translateX(-1000px)",r.style.textAlign="left",document.body.appendChild(r);for(var n=0;n<t.blocks.length;n++){var i=document.createElement("div");i.classList.add("part"),i.classList.add("part"+t.blocks.length+"_"+(n+1)),i.className+=t.isVertical&&1!==t.blocks.length?"":" shipHoriszontal",i.style.transform=t.isVertical?"rotate(90deg)":"",i.style.display=t.isVertical?"block":"inline-block",r.appendChild(i)}e.dataTransfer.setData("Text","Text"),e.dataTransfer.setDragImage(r,75,75),setTimeout(function(){return r.remove()})},e.prototype.onDragOver=function(e,t){e.preventDefault(),this.player.markFieldUnderShip(t,this.draggedShip,!0)},e.prototype.onDragLeave=function(e,t){e.preventDefault(),this.player.markFieldUnderShip(t,this.draggedShip,!1)},e.prototype.onDrop=function(e,t){e.preventDefault(),this.player.tryToPlaceShip(t,this.draggedShip),this.player.unmarkFieldDisabledForShip(),this.draggedShip.isInAir=!1,this.draggedShip=void 0},e.prototype.onDragEnd=function(e){e.preventDefault(),this.draggedShip&&(this.player.unmarkFieldDisabledForShip(),this.draggedShip.isInAir=!1,this.draggedShip=void 0)},e=n([o.Injectable(),i("design:paramtypes",["function"==typeof(t=void 0!==a.PlayerService&&a.PlayerService)&&t||Object])],e);var t}();t.DragndropService=s},283:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),a=r(60),s=function(){function e(e){this.playerService=e,this.player=this.playerService.player,this.opponent=this.playerService.opponent,this.game=this.playerService.game}return e.prototype.onOpponentFieldClick=function(e){this.playerService.fire(e)},e=n([o.Component({selector:"app-battle-component",template:r(626),styles:[r(620)]}),i("design:paramtypes",["function"==typeof(t=void 0!==a.PlayerService&&a.PlayerService)&&t||Object])],e);var t}();t.BattleComponent=s},284:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),a=r(58),s=r(60),l=function(){function e(e,t){this.playerService=e,this.router=t}return e.prototype.canActivate=function(e,t){return this.checkPlayerShips()},e.prototype.canLoad=function(e){return this.checkPlayerShips()},e.prototype.checkPlayerShips=function(){var e=this.playerService.player.allShipsArePlaced();return e||this.router.navigateByUrl("/preparing"),e},e=n([o.Injectable(),i("design:paramtypes",["function"==typeof(t=void 0!==s.PlayerService&&s.PlayerService)&&t||Object,"function"==typeof(r=void 0!==a.Router&&a.Router)&&r||Object])],e);var t,r}();t.BattleGuard=l},285:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),a=r(52),s=r(459),l=r(283),p=r(287),c=r(286),f=function(){function e(){}return e=n([o.NgModule({imports:[a.CommonModule,s.BattleRoutingModule],declarations:[l.BattleComponent,p.BFieldComponent,c.BControlsComponent]}),i("design:paramtypes",[])],e)}();t.BattleModule=f},286:function(e,t,r){"use strict";var n=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},i=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=r(0),s=r(60),l=function(){function e(e){this.playerService=e,this.player=this.playerService.player,this.opponent=this.playerService.opponent,this.game=this.playerService.game}return i([a.Input(),o("design:type",String)],e.prototype,"type",void 0),e=i([a.Component({selector:"app-controls-component",template:r(627),styles:[r(621)]}),o("design:paramtypes",["function"==typeof(t=void 0!==s.PlayerService&&s.PlayerService)&&t||Object])],e);var t}(),p=function(e){function t(){e.apply(this,arguments)}return n(t,e),t}(l);t.PControlsComponent=p;var c=function(e){function t(){e.apply(this,arguments)}return n(t,e),t}(l);t.BControlsComponent=c},287:function(e,t,r){"use strict";var n=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},i=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=r(0),s=r(60),l=r(182),p=function(){function e(e,t){this.playerService=e,this.dragndropService=t,this.rotateShip=new a.EventEmitter,this.dragndrop=this.dragndropService}return e.prototype.onOpponentFieldClick=function(e){this.canFire&&this.playerService.fire(e)},e.prototype.onContextMenuOnFieldShip=function(e,t){e.preventDefault(),this.isBattleMode||this.rotateShip.emit(t)},i([a.Input(),o("design:type",Object)],e.prototype,"field",void 0),i([a.Input(),o("design:type",Boolean)],e.prototype,"showShips",void 0),i([a.Input(),o("design:type",Boolean)],e.prototype,"showFieldBorder",void 0),i([a.Input(),o("design:type",Boolean)],e.prototype,"canFire",void 0),i([a.Input(),o("design:type",Boolean)],e.prototype,"isBattleMode",void 0),i([a.Output(),o("design:type",Object)],e.prototype,"rotateShip",void 0),e=i([a.Component({selector:"app-field-component",template:r(628),styles:[r(622)]}),o("design:paramtypes",["function"==typeof(t=void 0!==s.PlayerService&&s.PlayerService)&&t||Object,"function"==typeof(n=void 0!==l.DragndropService&&l.DragndropService)&&n||Object])],e);var t,n}(),c=function(e){function t(){e.apply(this,arguments)}return n(t,e),t}(p);t.PFieldComponent=c;var f=function(e){function t(){e.apply(this,arguments)}return n(t,e),t}(p);t.BFieldComponent=f},288:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),a=r(124),s=r(58),l=function(){function e(e,t){this.title=e,this.router=t,this.normalTitle="",this.title404="404 Not Found"}return e.prototype.ngOnInit=function(){this.normalTitle=this.title.getTitle(),this.title.setTitle(this.title404)},e.prototype.goToMain=function(){this.title.setTitle(this.normalTitle),this.router.navigateByUrl("/")},e=n([o.Component({template:'\n        <h2>{{title404}}</h2>\n        <a class="href" (click)="goToMain()">Main page</a>\n    ',styles:["\n        .href {\n            text-decoration: underline;\n            cursor: pointer;\n        }\n        "]}),i("design:paramtypes",["function"==typeof(t=void 0!==a.Title&&a.Title)&&t||Object,"function"==typeof(r=void 0!==s.Router&&s.Router)&&r||Object])],e);var t,r}();t.PageNotFoundComponent=l},289:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),a=r(60),s=function(){function e(e){this.playerService=e,this.player=this.playerService.player}return e.prototype.preventDefault=function(e){return e.preventDefault(),!1},e.prototype.rotateShipOnF=function(e){this.player.rotateShipOnField(e,void 0)},e=n([o.Component({selector:"app-preparing-component",template:r(629),styles:[r(623)]}),i("design:paramtypes",["function"==typeof(t=void 0!==a.PlayerService&&a.PlayerService)&&t||Object])],e);var t}();t.PreparingComponent=s},290:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),a=r(52),s=r(466),l=r(289),p=r(467),c=r(182),f=r(287),u=r(286),d=function(){function e(){}return e=n([o.NgModule({imports:[a.CommonModule,s.PreparingRoutingModule],declarations:[l.PreparingComponent,p.ShipsComponent,f.PFieldComponent,u.PControlsComponent],providers:[c.DragndropService]}),i("design:paramtypes",[])],e)}();t.PreparingModule=d},347:function(e,t,r){function n(e){var t=i[e];return t?Promise.all(t.slice(1).map(r.e)).then(function(){return r(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var i={"./battle/battle.module":[285],"./preparing/preparing.module":[290]};n.keys=function(){return Object.keys(i)},e.exports=n,n.id=347},348:function(e,t,r){"use strict";var n=r(426),i=r(458);n.platformBrowserDynamic().bootstrapModule(i.AppModule)},456:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),a=r(58),s=r(284),l=[{path:"",redirectTo:"/preparing",pathMatch:"full"},{path:"preparing",loadChildren:"./preparing/preparing.module#PreparingModule"},{path:"battle",loadChildren:"./battle/battle.module#BattleModule",canActivate:[s.BattleGuard],canLoad:[s.BattleGuard]}],p=function(){function e(){}return e=n([o.NgModule({imports:[a.RouterModule.forRoot(l)],exports:[a.RouterModule]}),i("design:paramtypes",[])],e)}();t.AppRoutingModule=p},457:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),a=function(){function e(){}return e=n([o.Component({selector:"app-battleship",template:r(625),styles:[r(619)]}),i("design:paramtypes",[])],e)}();t.AppComponent=a},458:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),a=r(124),s=r(456),l=r(284),p=r(60),c=r(457),f=r(465),u=r(290),d=r(285),h=function(){function e(){}return e=n([o.NgModule({imports:[a.BrowserModule,s.AppRoutingModule,f.PageNotFoundModule,u.PreparingModule,d.BattleModule],declarations:[c.AppComponent],providers:[p.PlayerService,l.BattleGuard],bootstrap:[c.AppComponent]}),i("design:paramtypes",[])],e)}();t.AppModule=h},459:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),a=r(58),s=r(283),l=[{path:"",component:s.BattleComponent}],p=function(){function e(){}return e=n([o.NgModule({imports:[a.RouterModule.forChild(l)],exports:[a.RouterModule]}),i("design:paramtypes",[])],e)}();t.BattleRoutingModule=p},460:function(e,t,r){"use strict";var n=function(){function e(){this.isHumanTurn=!0,this.turnNumber=0}return e}();t.Game=n},461:function(e,t,r){"use strict";var n=r(462),i=r(463),o=function(){function e(){var e=this;this.ships=[],this.field=[],this.shipsBySize=[],this.shipsOnField=0,this.firedBlockCountTotal=0;for(var t=1;t<5;t++){this.shipsBySize.push([]);for(var r=0;r<t;r++)this.ships.push(new n.Ship(5-t)),this.shipsBySize[t-1].push(this.ships[this.ships.length-1])}this.shipsBySize.reverse();for(var t=0;t<10;t++){this.field.push([]);for(var r=0;r<10;r++)this.field[t].push(new i.Square(t,r))}this.field.map(function(t,r){return t.map(function(t,n){return e.calculateNeighbors(t,r,n)})})}return e.prototype.calculateNeighbors=function(e,t,r){var n=this;[[t-1,r-1],[t-1,r],[t-1,r+1],[t,r-1],[t,r+1],[t+1,r-1],[t+1,r],[t+1,r+1]].map(function(t,r){n.field[t[0]]&&n.field[t[0]][t[1]]&&(e.allNeighbors.push(n.field[t[0]][t[1]]),[0,2,5,7].indexOf(r)>-1&&e.diagonalNeighbors.push(n.field[t[0]][t[1]]),[1,3,4,6].indexOf(r)>-1&&e.linearNeighbors.push(n.field[t[0]][t[1]]),[1,6].indexOf(r)>-1&&e.verticalNeighbors.push(n.field[t[0]][t[1]]),[3,4].indexOf(r)>-1&&e.horizontalNeighbors.push(n.field[t[0]][t[1]]))})},e.prototype.getPlacesForDraggedShip=function(e,t){if(!t||!e)return[];var r=e.x,n=e.y,i=[];if(t.isVertical){for(var o=r+(t.blocks.length-1);o>=r-(t.blocks.length-1);o--)if(this.field[o]&&(this.field[o][n].isShip||this.field[o][n].isNeighborOfShip?i=[]:i.push(this.field[o][n]),i.length===t.blocks.length))return i.reverse()}else for(var o=n+(t.blocks.length-1);o>=n-(t.blocks.length-1);o--)if(this.field[r][o]&&(this.field[r][o].isShip||this.field[r][o].isNeighborOfShip?i=[]:i.push(this.field[r][o]),i.length===t.blocks.length))return i.reverse();return[]},e.prototype.tryToPlaceShip=function(e,t){var r=this.getPlacesForDraggedShip(e,t);r.length&&this.placeShip(r,t)},e.prototype.placeShip=function(e,t){e.map(function(e,r){e.isShip=!0,e.isUnderShip=!1,e.ship=t,e.blockNum=r,e.markNeighborsOfShip(),t.blocks[r]=[e.x,e.y]}),this.shipsOnField++,t.isOnField=!0},e.prototype.removeShipFromField=function(e){e.isOnField=!1,this.shipsOnField--;for(var t=0;t<e.blocks.length;t++){var r=e.blocks[t],n=this.field[r[0]][r[1]];n.isShip=!1,n.ship=void 0,n.blockNum=void 0;for(var i=0;i<n.allNeighbors.length;i++){for(var o=0,a=0;a<n.allNeighbors[i].allNeighbors.length;a++)n.allNeighbors[i].allNeighbors[a].isShip&&o++;o||(n.allNeighbors[i].isNeighborOfShip=!1)}}},e.prototype.markFieldUnderShip=function(e,t,r){this.getPlacesForDraggedShip(e,t).map(function(e){return e.isUnderShip=r})},e.prototype.markFieldDisabledForShip=function(e){var t=this;this.field.map(function(r){return r.map(function(r){t.getPlacesForDraggedShip(r,e).length||(r.isDisabledForShip=!0)})})},e.prototype.unmarkFieldDisabledForShip=function(){this.field.map(function(e){return e.map(function(e){e.isDisabledForShip=!1})})},e.prototype.rotateShipOnField=function(e,t){if(e.ship&&1!==e.ship.blocks.length){var r,n,i=e.ship;e.ship.blocks.map(function(t,i){t[0]===e.x&&t[1]===e.y&&(r=t,n=i)});var o=i.isVertical?[r[0],r[1]-n]:[r[0]-n,r[1]];o=[Math.min(Math.max(o[0],0),10),Math.min(Math.max(o[1],0),10)],this.removeShipFromField(i),i.rotate();var a=this.getPlacesForDraggedShip(this.field[o[0]][o[1]],i);if(a.length)this.placeShip(a,i);else{i.rotate();var s=this.field[i.blocks[0][0]][i.blocks[0][1]],l=this.getPlacesForDraggedShip(s,i);if(this.placeShip(l,i),t)t.splice(0,1);else{t=[];for(var p=1;p<=2;p++)i.blocks[n-p]&&t.push(i.blocks[n-p]),i.blocks[n+p]&&t.push(i.blocks[n+p])}t.length&&this.rotateShipOnField(this.field[t[0][0]][t[0][1]],t)}}},e.prototype.randomSet=function(){var e=this;this.allShipsArePlaced()&&this.clearField(),this.ships.map(function(t){if(!t.isOnField){t.isVertical=Math.random()>.5,t.isOnField=!0;var r=[];e.field.map(function(n){return n.map(function(n){var i=e.getPlacesForDraggedShip(n,t);i.length&&r.push(i)})});var n=r[Math.floor(Math.random()*r.length)];e.placeShip(n,t)}})},e.prototype.clearField=function(){this.constructor()},e.prototype.clearBatte=function(){this.firedBlockCountTotal=0,this.field.map(function(e){return e.map(function(e){e.isFired=!1})}),this.ships.map(function(e){e.firedBlockCount=0})},e.prototype.allShipsArePlaced=function(){return 10===this.shipsOnField},e.prototype.allShipsAreOnFire=function(){return 20===this.firedBlockCountTotal},e.prototype.getFired=function(e){if(!e.isFired&&(e.isFired=!0,e.isShip)){this.firedBlockCountTotal++,e.fireDiagonalNeighbors();var t=e.ship;if(t.firedBlockCount++,t.areAllBlocksFired())for(var r=0;r<t.blocks.length;r++){var n=t.blocks[r];this.field[n[0]][n[1]].fireAllNeighbors()}}},e}();t.Player=o},462:function(e,t,r){"use strict";var n=function(){function e(e){this.blocks=Array(e).fill([void 0,void 0]),this.firedBlockCount=0,this.isVertical=!1,this.isOnField=!1,this.isInAir=!1,this.isOnfire=!1,this.isDrowned=!1}return e.prototype.rotate=function(){this.isVertical=!this.isVertical},e.prototype.areAllBlocksFired=function(){return this.blocks.length===this.firedBlockCount},e}();t.Ship=n},463:function(e,t,r){"use strict";var n=function(){function e(e,t){this.x=e,this.y=t,this.isShip=!1,this.isDisabledForShip=!1,this.isUnderShip=!1,this.isNeighborOfShip=!1,this.isFired=!1,this.allNeighbors=[],this.diagonalNeighbors=[],this.linearNeighbors=[],this.verticalNeighbors=[],this.horizontalNeighbors=[],this.ship=void 0,this.blockNum=void 0}return e.prototype.fireDiagonalNeighbors=function(){this.diagonalNeighbors.map(function(e){return e.isFired=!0})},e.prototype.fireAllNeighbors=function(){this.allNeighbors.map(function(e){return e.isFired=!0})},e.prototype.markNeighborsOfShip=function(){this.allNeighbors.map(function(e){e.isShip||(e.isNeighborOfShip=!0)})},e}();t.Square=n},464:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),a=r(58),s=r(288),l=[{path:"**",component:s.PageNotFoundComponent}],p=function(){function e(){}return e=n([o.NgModule({imports:[a.RouterModule.forChild(l)],exports:[a.RouterModule]}),i("design:paramtypes",[])],e)}();t.PageNotFoundRoutingModule=p},465:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),a=r(52),s=r(464),l=r(288),p=function(){function e(){}return e=n([o.NgModule({imports:[a.CommonModule,s.PageNotFoundRoutingModule],declarations:[l.PageNotFoundComponent]}),i("design:paramtypes",[])],e)}();t.PageNotFoundModule=p},466:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),a=r(58),s=r(289),l=[{path:"",component:s.PreparingComponent}],p=function(){function e(){}return e=n([o.NgModule({imports:[a.RouterModule.forChild(l)],exports:[a.RouterModule]}),i("design:paramtypes",[])],e)}();t.PreparingRoutingModule=p},467:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),a=r(182),s=function(){function e(e){this.dragndropService=e,this.dragndrop=this.dragndropService}return e.prototype.preventDefault=function(e){return e.preventDefault(),!1},e.prototype.onContextMenuOutsideShip=function(e,t){e.preventDefault(),t.rotate()},n([o.Input(),i("design:type",Object)],e.prototype,"shipsBySize",void 0),e=n([o.Component({selector:"app-ships-component",template:r(630),styles:[r(624)]}),i("design:paramtypes",["function"==typeof(t=void 0!==a.DragndropService&&a.DragndropService)&&t||Object])],e);var t}();t.ShipsComponent=s},60:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(0),a=r(461),s=r(460),l=r(58);r(634);var p=function(){function e(e){var t=this;this.player=new a.Player,this.opponent=new a.Player,e.events.filter(function(e){return e instanceof l.NavigationStart}).subscribe(function(e){"/battle"===e.url&&(t.opponent.randomSet(),t.game=new s.Game),"/preparing"===e.url&&t.player.clearBatte()})}return e.prototype.opponentAI=function(){var e=[],t=[];return this.player.field.map(function(r){return r.map(function(r){r.isFired&&r.isShip&&r.allNeighbors.map(function(e){e.isFired||t.push(e)}),r.isFired||e.push(r)})}),t.length?t[Math.floor(Math.random()*t.length)]:e[Math.floor(Math.random()*e.length)]},e.prototype.fire=function(e){var t=this;if(this.game.isHumanTurn&&!e.isFired&&!this.opponent.allShipsAreOnFire()&&!this.player.allShipsAreOnFire()&&(this.game.turnNumber++,this.opponent.getFired(e),!this.opponent.allShipsAreOnFire())){this.game.isHumanTurn=!1;var r=this;setTimeout(function(){r.player.getFired(t.opponentAI()),r.game.isHumanTurn=!0},150)}},e=n([o.Injectable(),i("design:paramtypes",["function"==typeof(t=void 0!==l.Router&&l.Router)&&t||Object])],e);var t}();t.PlayerService=p},619:function(e,t){e.exports=".header{font-size:17px;padding:25px 0 40px;margin:0;color:#444526}.header,span{font-family:Arial,Helvetica,sans-serif}span{font-size:200%;color:#2b2d20}a,span{font-weight:700}a{font-size:100%;color:#bdc1a2}"},620:function(e,t){e.exports=".fieldBg{background-color:#2b2d20;display:inline-block;border:10px solid #2b2d20;font-size:0}"},621:function(e,t){e.exports=".shipControls{background-color:#2b2d20;text-align:center;padding:1px 0;font-size:16px}.shipControls button{min-width:70px;padding:5px;background-color:#fed650;display:inline-block;cursor:pointer;height:27px}.shipControls button,.shipControls button:active{border:0;outline:none}.shipControls button:disabled{background-color:#55552a;opacity:.6;color:#c2c3a3}.shipControls button:last-child{float:right}.shipControls button:first-child{float:left}.shipControls button.turnCounter{background-color:#c65b39;cursor:default}.shipControls button.turnIndicator{background-color:#415560;cursor:default;color:#d1b33f}.shipControls button.turnIndicator.active{background-color:#7f7b60;color:#c2c3a3;cursor:default}.shipControls button.rotateHint{background-color:#55552a;color:#c2c3a3;cursor:default;opacity:.85;width:100%}"},622:function(e,t){e.exports=".field{display:inline-block;font-size:0;margin:10px 0}.fieldBorder{border-right:20px solid #2b2d20}.row{margin:0;padding:0;line-height:0}.square{width:26px;height:26px;display:inline-block;background-color:#558c14;outline:1px solid #fff7a2;vertical-align:middle}.closedForShip,.prePlacedShip{background-color:#c3c379!important}.shipIsOnFire{background-color:#c65b39!important}.fieldIsOnFire{background-color:#c0ce33!important}[draggable=true] .part{cursor:move}"},623:function(e,t){e.exports=".fieldBg,.preparingBg{font-size:0}.fieldBg{background-color:#2b2d20;display:inline-block;border:10px solid #2b2d20}"},624:function(e,t){e.exports=".ships{display:inline-block;margin-left:30px;width:250px;text-align:left}.column,.ships{vertical-align:top;line-height:0}.column{padding:13px 0}.sizeLabel{display:inline-block;vertical-align:top;background-color:#55552a;color:#c2c3a3;text-align:center;line-height:24px;opacity:.85;font-size:16px}.size1,.sizeLabel{width:24px;height:24px}.size2{width:48px;height:48px}.size3{width:72px;height:72px}.size4{width:96px;height:96px}.ship{line-height:0;transition:all .2s ease-in-out;display:inline-block;padding:0 10px;vertical-align:bottom;text-align:center}.shipScaled{-webkit-transform:scale(.7);transform:scale(.7)}[draggable] .part{cursor:move}.hidden{visibility:hidden}"},625:function(e,t){e.exports='<div class="mainBG">\r\n  <div class="header">\r\n    <span>BattleShip</span>\r\n    by Alexander Ishchenko\r\n    (<a href="https://github.com/qialex/Angular2-BattleShip">GitHub</a>,\r\n    <a href="https://www.linkedin.com/in/alex-ishenko-ui/">LinkedIn</a>,\r\n    <a href="http://qialex.me/ui">CV</a>)\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n</div>'},626:function(e,t){e.exports='<div class="fieldBg">\r\n    <app-controls-component [type]="\'battleTop\'"></app-controls-component>\r\n    <app-field-component\r\n            [field]="player.field"\r\n            [showShips]="true"\r\n            [showFieldBorder]="true"\r\n            [canFire]="false"\r\n            [isBattleMode]="true">\r\n    </app-field-component>\r\n    <app-field-component\r\n            [field]="opponent.field"\r\n            [showShips]="player.allShipsAreOnFire()"\r\n            [showFieldBorder]="false"\r\n            [canFire]="true"\r\n            [isBattleMode]="true">\r\n    </app-field-component>\r\n    <app-controls-component [type]="\'battleBottom\'"></app-controls-component>\r\n</div>'},627:function(e,t){e.exports='<div class="shipControls" *ngIf="type === \'preparingTop\'">\r\n    <button (click)="player.randomSet()">Random</button>\r\n    <button routerLink="/battle" [disabled]="!player.allShipsArePlaced()">Start!</button>\r\n    <button (click)="player.clearField()" [disabled]="!player.shipsOnField">Clear</button>\r\n</div>\r\n<div class="shipControls" *ngIf="type === \'preparingBottom\'">\r\n    <button class="rotateHint">\r\n        <b>Drag</b> ships. <b>Right click</b> to rotate.\r\n    </button>\r\n</div>\r\n<div class="shipControls" *ngIf="type === \'battleTop\'">\r\n    <button class="turnIndicator" [ngClass]="{ active: !game.isHumanTurn }">\r\n        <span *ngIf="!player.allShipsAreOnFire() && !opponent.allShipsAreOnFire()">{{20 - player.firedBlockCountTotal}}</span>\r\n        <span *ngIf="player.allShipsAreOnFire()">You lose</span>\r\n        <span *ngIf="opponent.allShipsAreOnFire()">You win</span>\r\n    </button>\r\n    <button class="turnCounter">Turn: <b>{{game.turnNumber || 0}}</b></button>\r\n    <button class="turnIndicator" [ngClass]="{ active: game.isHumanTurn }">\r\n        <span *ngIf="!player.allShipsAreOnFire() && !opponent.allShipsAreOnFire()">{{20 - opponent.firedBlockCountTotal}}</span>\r\n        <span *ngIf="player.allShipsAreOnFire()">AI wins</span>\r\n        <span *ngIf="opponent.allShipsAreOnFire()">AI loses</span>\r\n    </button>\r\n</div>\r\n<div class="shipControls" *ngIf="type === \'battleBottom\'">\r\n    <button routerLink="/preparing">Quit</button>\r\n</div>'},628:function(e,t){e.exports='<div class="field" [ngClass]="{fieldBorder: showFieldBorder}">\r\n    <div *ngFor="let row of field" class="row">\r\n        <div *ngFor="let square of row"\r\n             class="square"\r\n             [ngClass]="{\r\n                    shipIsOnFire: square.isShip && square.isFired,\r\n                    fieldIsOnFire: !square.isShip && square.isFired,\r\n                    prePlacedShip: square.isUnderShip,\r\n                    closedForShip: square.isDisabledForShip\r\n                 }"\r\n\r\n             [draggable]="!isBattleMode"\r\n             (drop)="dragndrop.onDrop($event, square)"\r\n             (dragstart)="dragndrop.onDragStart($event, square.ship)"\r\n             (dragover)="dragndrop.onDragOver($event, square)"\r\n             (dragleave)="dragndrop.onDragLeave($event, square)"\r\n             (dragend)="dragndrop.onDragEnd($event)"\r\n             (contextmenu)="onContextMenuOnFieldShip($event, square)"\r\n\r\n             (click)="onOpponentFieldClick(square)">\r\n            <div *ngIf="square.isShip && (square.ship.areAllBlocksFired() || showShips)" class="part part{{square.ship.blocks.length}}_{{ square.blockNum + 1}}"\r\n                 [ngClass]="{ shipHoriszontal: square.ship && square.ship.blocks.length === 1 || square.isShip && !square.ship.isVertical }">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'},629:function(e,t){e.exports='<div class="preparingBg" (selectstart)="preventDefault($event)">\r\n\r\n    <div class="fieldBg">\r\n        <app-controls-component [type]="\'preparingTop\'"></app-controls-component>\r\n\r\n        <app-field-component\r\n                [field]="player.field"\r\n                [showShips]="true"\r\n                [showFieldBorder]="false"\r\n                [canFire]="false"\r\n                [isBattleMode]="false"\r\n                (rotateShip)="rotateShipOnF($event)">\r\n        </app-field-component>\r\n\r\n        <app-controls-component [type]="\'preparingBottom\'"></app-controls-component>\r\n    </div>\r\n\r\n    <app-ships-component [shipsBySize]="player.shipsBySize"></app-ships-component>\r\n</div>\r\n\r\n\r\n\r\n\r\n'},630:function(e,t){e.exports='<div class="ships" (contextmenu)="preventDefault($event)">\r\n    <div *ngFor="let shipBlock of shipsBySize; let i = index;" class="column">\r\n        <div class="sizeLabel">{{i + 1}}</div>\r\n        <div *ngFor="let ship of shipBlock"\r\n             class="ship size{{ship.blocks.length}}"\r\n             draggable="true"\r\n             (dragstart)="dragndrop.onDragStart($event, ship)"\r\n             (dragend)="dragndrop.onDragEnd($event)"\r\n             [ngClass]="{\r\n                    shipScaled: ship.isInAir\r\n                 }"\r\n             (contextmenu)="onContextMenuOutsideShip($event, ship)">\r\n\r\n            <div *ngFor="let part of ship.blocks; let blockNum = index;"\r\n                 class="part part{{ship.blocks.length}}_{{blockNum + 1}}"\r\n                 [ngClass]="{\r\n                        hidden: ship.isOnField,\r\n                        shipHoriszontal: !ship.isVertical || ship.blocks.length === 1\r\n                     }">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'},646:function(e,t,r){e.exports=r(348)}},[646]);
