import { Component } from "@angular/core";

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>{{ title }}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent{
  title= 'Tour of heroes';
}

/*
export class Hero{
  id: number;
  name: string;
}
const HEROES: Hero[] = [
  { id: 11, name: 'Raindrops' },
  { id: 22, name: 'xusihan'},
  { id: 33, name: 'haha'},
  { id: 44, name: 'adfs'}
];

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details</h2>
    <div>
      <label>id: </label>
      {{hero.id}}
    </div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    <div>
      <ul class="heroes">
        <li *ngFor="let hero of heroes"
            [class.selected]="hero === selectedHero"
            (click)="onSelect(hero)">
            <span class="badge">{{hero.id}}</span>
            {{hero.name}}
        </li>
      </ul>
    </div>
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}}</h2>
      <div>
        <label>id: </label>
        {{selectedHero.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
      </div>
    </div>
    <div>
      <hero-detail [hero]="selectedHero"></hero-detail>
    </div>
  `,providers: [HeroService]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.getHeroes();
  }
  title = 'Tour of Heros';
  hero: Hero = {
    id: 1,
    name: 'Raindrops'
  };
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
  // heroService = new HeroService(); no
  constructor(private heroService: HeroService){
  };
  getHeroes(): void{
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}
*/


