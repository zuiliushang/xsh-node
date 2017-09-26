import { Component,OnInit } from "@angular/core";

import { Hero } from "../hero/hero";
import { HeroService} from "../../service/hero/hero.service";

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  //template: '<h3>My Dashboard</h3>'
})

export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];
  constructor(private heroService: HeroService){}
  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }
}
