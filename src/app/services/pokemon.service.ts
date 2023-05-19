import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokemonsMaisProcurados } from '../models/pokemon-model';
import { Observable } from 'rxjs';
import { pokemonAPI } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})


export class PokemonService {

  // pokemonAPI esta trazendo de environment.ts a url
  private apiUrl = pokemonAPI.apiUrl;

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl)
  }

  readPokemon(): Observable<PokemonsMaisProcurados[]> {
    return this.http.get<PokemonsMaisProcurados[]> (this.apiUrl)
  }

  
}

export default PokemonService;