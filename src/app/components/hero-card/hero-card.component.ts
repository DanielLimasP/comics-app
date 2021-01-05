import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css'],
})
export class HeroCardComponent implements OnInit {
  // @Input is like a prop
  @Input() hero: Hero;
  @Input() idx: number;
  @Output() selectedHero: EventEmitter<number>;
  constructor(private router: Router) {
    this.selectedHero = new EventEmitter();
  }

  ngOnInit(): void {}

  seeHero() {
    // console.log(this.idx);
    this.router.navigate(['hero', this.idx]);
    // this.selectedHero.emit(this.idx);
  }
}
