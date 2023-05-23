import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {

  @Input()
  pokemon: string | undefined;
  
  @Input()
  numero!: number;

  // Função para pegar imagens dos pokemons, com base na API pokedex
  pegarImagePokemon() {

    const numeroFormatado = this.leadingZero(this.numero);

    return 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+numeroFormatado+'.png';
  }

  // Função que coloca ZEROS na frente de acordo com a quantidade necessaria
  leadingZero (str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }

}
