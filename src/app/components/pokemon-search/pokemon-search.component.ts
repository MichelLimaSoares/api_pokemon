import { Pokemon } from 'src/app/models/pokemon-model';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';


@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {

  readSkills = PokemonCardComponent  



  pokemons: Pokemon[] = [];

  constructor (private pokemonService: PokemonService) {}

  ngOnInit(): void {
    
  }

  getSkills() {

    return this.readSkills

  
 }

  // pokemonsProcurados(): void {
  //   this.pokemonService.readPokemon().subscribe(pokemonMaisProcurados => {
  //     pokemonMaisProcurados = pokemonMaisProcurados
  //   })

  // }

}
