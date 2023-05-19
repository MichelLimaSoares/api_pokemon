import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonMonsWantedComponent } from './pokemon-mons-wanted.component';

describe('PokemonMonsWantedComponent', () => {
  let component: PokemonMonsWantedComponent;
  let fixture: ComponentFixture<PokemonMonsWantedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonMonsWantedComponent]
    });
    fixture = TestBed.createComponent(PokemonMonsWantedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
