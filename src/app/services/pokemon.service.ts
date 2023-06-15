import { Pokemon } from 'src/app/models/pokemon-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, map, of } from 'rxjs';
import { pokemonAPI, pokemonAttribute, pokemonImg } from 'src/environments/environment';
import { PokedexList } from '../models/pokedex-list-model';


@Injectable({
  providedIn: 'root'
})


export class PokemonService {

  pokemons: PokedexList [] =  [];
  pokemon: Pokemon [] = []; 
  
  // Buscando urls no environment.ts
  public apiUrl = pokemonAPI.apiUrl;
  public pokeImg = pokemonImg.apiUrl;
  public pokeSkill = pokemonAttribute.apiUrl;

  constructor(private http: HttpClient) { 
    this.loadPokemon();
  }

  // Carregar lista de pokemons da APIPokemons
   async loadPokemon() {
     const requisicao = await this.http.get<any>(this.apiUrl).toPromise();
    
     this.pokemons = requisicao.results;
     console.log(this.pokemons);
   }

  // loadPokemons(): Observable<PokedexList[]> {
  //   return from(this.http.get<any>(this.apiUrl).toPromise())
  //     .pipe(
  //       map((requisicao: any) => requisicao.results)
  //     );
  // }

  // readSkillsPokemons(): Observable<Pokemon> {
  //   return this.http.get<Pokemon>(this.pokeSkill)
  // }

  // loadSkillsPokemon(): Observable<string> {    
  //   const loadSkills = this.pokeSkill
  //   return of(loadSkills)

  
  // this.loadSkillsPokemon();
  // }


  // getPokemons(): Observable<Pokemon[]> {
  //   return this.http.get<any[]>(this.apiUrl)
  // }

  // getPokemonImg(): Observable<PokemonsMaisProcurados[]> {
  //   return  this.http.get<PokemonsMaisProcurados[]> (this.apiUrlImg)
  // }

}

//export default PokemonService;