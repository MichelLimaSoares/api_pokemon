import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonMonstWantedComponent } from './pokemon-monst-wanted.component';

describe('PokemonMonstWantedComponent', () => {
  let component: PokemonMonstWantedComponent;
  let fixture: ComponentFixture<PokemonMonstWantedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonMonstWantedComponent]
    });
    fixture = TestBed.createComponent(PokemonMonstWantedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
