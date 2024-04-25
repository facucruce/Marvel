import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Superhero } from '../models/superhero.model';

@Component({
  selector: 'app-superhero-detail',
  templateUrl: './superhero-detail.page.html',
  styleUrls: ['./superhero-detail.page.scss'],
})
export class SuperheroDetailPage implements OnInit {
  superhero!: Superhero;

  constructor(private router: Router) { }

  ngOnInit() {
    const superheroFromState = history.state.superhero;
    if (superheroFromState) {
      this.superhero = superheroFromState;
    } else {
      this.router.navigateByUrl('/home');
    }
  }
}