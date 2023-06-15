import { PokemonService } from './../../pokemon.service';
import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon-model';
import { pokemonAttribute, pokemonImg } from 'src/environments/environment';


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {

  private attribute = pokemonAttribute.apiUrl;

  private pokeImg = pokemonImg.apiUrl;

  @Input()
  pokemon!: string;
  
  @Input()
  numero!: number;

  constructor (private pokemonService: PokemonService) {

  }

  
  // Função para pegar imagens dos pokemons, com base na API pokedex
  pegarImagePokemon() {

    const numeroFormatado = this.leadingZero(this.numero);    
    return this.pokeImg+numeroFormatado+'.png';

  }


  // Função que coloca ZEROS na frente de acordo com a quantidade necessaria
  leadingZero (str: string | number, size = 3): string {

    let s = String(str);
    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;

  }

  // Function, get attibutes and skills pokemons
  readSkills () {
    return this.attribute;
  }

}
