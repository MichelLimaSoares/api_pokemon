import { Pokemon } from 'src/app/models/pokemon-model';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {

  

  pokemons: Pokemon[] = []

  constructor (private pokemonService: PokemonService) {}

  ngOnInit(): void {
   
    
    
  }

 
  
  

  // pokemonsProcurados(): void {
  //   this.pokemonService.readPokemon().subscribe(pokemonMaisProcurados => {
  //     pokemonMaisProcurados = pokemonMaisProcurados
  //   })

  // }

}
