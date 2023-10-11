import { Component } from '@angular/core';
import { playData } from './play-data';
import { upgradeData } from './upgrade-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  playData = playData
  upgradeData = upgradeData

}
