import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonService } from './services/pokemon.service';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { PokemonHomeLogoComponent } from './components/pokemon-home-logo/pokemon-home-logo.component';
import { PokemonPokedexComponent } from './components/pokemon-pokedex/pokemon-pokedex.component';
import { PokemonMonsWantedComponent } from './components/pokemon-mons-wanted/pokemon-mons-wanted.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonSearchComponent,
    PokemonHomeLogoComponent,
    PokemonPokedexComponent,
    PokemonMonsWantedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
