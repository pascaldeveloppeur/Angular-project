import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>Welcome to {{pokemonList[2]}}!</h1>

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  pokemonList = ['Bullbizarre','Salamèche','Carapuce'];
  ngOnInit(): void {
    console.table(this.pokemonList);
  }
  title = 'ng-pokemon-app';

  selectPokemon(pokemonName: string){
    console.log('vous avez cliqué sur un pokémon ${pokemonName}' );
  }
}
