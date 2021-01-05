import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroes-search',
  templateUrl: './heroes-search.component.html',
  styleUrls: ['./heroes-search.component.css'],
})
export class HeroesSearchComponent implements OnInit {
  heroes: Hero[];
  heroQuery: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.heroQuery = params['heroQuery'];
      this.heroes = this.heroesService.searchHero(params['heroQuery']);
    });
  }

  seeHero(idx: number) {
    this.router.navigate(['/hero', idx]);
  }

  ngOnInit(): void {}
}
