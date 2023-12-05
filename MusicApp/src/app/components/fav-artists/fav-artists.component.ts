import { Component } from '@angular/core';
import { favArtistData } from './favArtists';

@Component({
  selector: 'app-fav-artists',
  templateUrl: './fav-artists.component.html',
  styleUrls: ['./fav-artists.component.scss']
})
export class FavArtistsComponent {
  favArtistData = favArtistData

}
