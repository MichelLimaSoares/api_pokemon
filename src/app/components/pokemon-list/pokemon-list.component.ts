import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from 'src/app/models/pokemon-model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  
  pokemons = [
    'Bulbasaur',
    'Iyvisour'
  ];

  // implements OnInit

  // public pokemons: Pokemon[] = []

  // constructor(private pokemonService: PokemonService) { }

  // ngOnInit() {
    
  // }
  
}