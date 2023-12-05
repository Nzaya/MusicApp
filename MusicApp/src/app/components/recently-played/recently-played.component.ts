import { Component } from '@angular/core';
import { recentlyPlayedData } from './recent-played';

@Component({
  selector: 'app-recently-played',
  templateUrl: './recently-played.component.html',
  styleUrls: ['./recently-played.component.scss']
})
export class RecentlyPlayedComponent {
  recentlyPlayedData = recentlyPlayedData

}
