import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokemonsMaisProcurados } from '../models/pokemon-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]> (this.apiUrl)
  }

  readPokemon(): Observable<PokemonsMaisProcurados[]> {
    return this.http.get<PokemonsMaisProcurados[]> (this.apiUrl)
  }

  
}

export default PokemonService;