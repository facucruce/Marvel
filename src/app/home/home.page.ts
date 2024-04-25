
import { Component, OnInit } from '@angular/core';
import { SuperheroesService } from '../services/superheroes.service';
import { Superhero } from '../models/superhero.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  superheros: Superhero[] = [];

  constructor(
    private navCtrl: NavController,
    private superheroesService: SuperheroesService) {
     }

  ngOnInit() {
    this.getSuperheros();
  }

  getSuperheros(): void {
    this.superheroesService.getSuperheros().subscribe(response => {
      this.superheros = response.data.results.map((superhero: any) => ({
        id: superhero.id,
        name: superhero.name,
        thumbnail: `${superhero.thumbnail.path}.${superhero.thumbnail.extension}`,
        comicsAvailable: superhero.comics.available,
        seriesAvailable: superhero.series.available,
        storiesAvailable: superhero.stories.available
      }));
    });
  }

  goToDetail(superhero: Superhero) {
    this.navCtrl.navigateForward('/superhero-detail', {
      state: { superhero: superhero }
    });
  }
}
