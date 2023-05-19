import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPokedexComponent } from './pokemon-pokedex.component';

describe('PokemonPokedexComponent', () => {
  let component: PokemonPokedexComponent;
  let fixture: ComponentFixture<PokemonPokedexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonPokedexComponent]
    });
    fixture = TestBed.createComponent(PokemonPokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
