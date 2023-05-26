import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon-model';
import { Observable } from 'rxjs';
import { pokemonAPI } from 'src/environments/environment';
import { PokedexList } from '../models/pokedex-list-model';
import { pokemonImg } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class PokemonService {

  pokemons: PokedexList [] =  [];
  
  // pokemonAPI esta trazendo de environment.ts a url
  public apiUrl = pokemonAPI.apiUrl;
  public pokeImg = pokemonImg.apiUrl;

  constructor(private http: HttpClient) { 
    this.loadPokemon();
  }

  // Carregar lista de pokemons da APIPokemons
  async loadPokemon() {
    const requisicao = await this.http.get<any>(this.apiUrl).toPromise();
    
    this.pokemons = requisicao.results;
    console.log(this.pokemons);
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<any[]>(this.apiUrl)
  }

  // readPokemon(): Observable<PokemonsMaisProcurados[]> {
  //   return this.http.get<PokemonsMaisProcurados[]> (this.apiUrl)
  // }

  // getPokemonImg(): Observable<PokemonsMaisProcurados[]> {
  //   return  this.http.get<PokemonsMaisProcurados[]> (this.apiUrlImg)
  // }
}

//export default PokemonService;