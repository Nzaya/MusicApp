import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavArtistsComponent } from './fav-artists.component';

describe('FavArtistsComponent', () => {
  let component: FavArtistsComponent;
  let fixture: ComponentFixture<FavArtistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavArtistsComponent]
    });
    fixture = TestBed.createComponent(FavArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
