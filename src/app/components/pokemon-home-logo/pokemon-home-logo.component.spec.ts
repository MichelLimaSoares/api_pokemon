import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonHomeLogoComponent } from './pokemon-home-logo.component';

describe('PokemonHomeLogoComponent', () => {
  let component: PokemonHomeLogoComponent;
  let fixture: ComponentFixture<PokemonHomeLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonHomeLogoComponent]
    });
    fixture = TestBed.createComponent(PokemonHomeLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
