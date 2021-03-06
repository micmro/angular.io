/* Second Heroes version */
// #docplaster

// #docregion
import {Component}   from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CrisisListComponent}   from './crisis-list.component';
// #docregion hero-import
import {HeroListComponent}     from './heroes/hero-list.component';
import {HeroDetailComponent}   from './heroes/hero-detail.component';
// #enddocregion hero-import

@Component({
  selector: 'my-app',
  template: `
    <h1>Component Router</h1>
    <a [routerLink]="['CrisisCenter']">Crisis Center</a>
    <a [routerLink]="['Heroes']">Heroes</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
// #enddocregion
/*
// #docregion route-config
@Component({ ... })
// #enddocregion route-config
*/
// #docregion
// #docregion route-config
@RouteConfig([
// #docregion route-defs
  {path:'/crisis-center', name: 'CrisisCenter', component: CrisisListComponent},
  {path:'/heroes',        name: 'Heroes',       component: HeroListComponent},
  // #docregion hero-detail-route
  {path:'/hero/:id',      name: 'HeroDetail',   component: HeroDetailComponent}
  // #enddocregion hero-detail-route
// #enddocregion route-defs
])
export class AppComponent { }
// #enddocregion route-config
// #enddocregion

// #docregion child-router-link
// #enddocregion child-router-link
