import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from 'src/app/models/pokemon-model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  
  pokemons!: any[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    // this.getPokemons();
  }

  // getPokemons() {
  //   this.pokemonService.getPokemons().subscribe(pokemons => {
  //     this.pokemons = pokemons;
  //   });
  // }

  // selectPokemon(pokemon: Pokemon) {
  //   this.selectedPokemon = pokemon;
  // }

  // getPokemons() {
  //   this.pokemonService.getPokemons().subscribe(
  //     (response: any) => {
  //       this.pokemons = response.results;
  //     },
  //     (error: any) => {
  //       console.error(error);
  //     }
  //   );
  // }
}