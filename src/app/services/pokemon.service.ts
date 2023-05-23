import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon-model';
import { Observable } from 'rxjs';
import { pokedexAPI, pokemonAPI } from 'src/environments/environment';
import { PokemonsMaisProcurados } from '../models/pokemon-mais-procurados';

@Injectable({
  providedIn: 'root'
})


export class PokemonService {

  // pokemonAPI esta trazendo de environment.ts a url
  private apiUrl = pokemonAPI.apiUrl;
  //private apiUrlImg = pokedexAPI.apiUrl;

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl)
  }

  readPokemon(): Observable<PokemonsMaisProcurados[]> {
    return this.http.get<PokemonsMaisProcurados[]> (this.apiUrl)
  }

  // getPokemonImg(): Observable<PokemonsMaisProcurados[]> {
  //   return  this.http.get<PokemonsMaisProcurados[]> (this.apiUrlImg)
  // }
}

//export default PokemonService;