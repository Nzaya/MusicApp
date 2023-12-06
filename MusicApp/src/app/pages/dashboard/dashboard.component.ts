import { Component, OnInit } from '@angular/core';
import { playData } from './play-data';
import { upgradeData } from './upgrade-data';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  playData = playData;
  upgradeData = upgradeData;

  currentTheme!: string;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }

  ngOnChanges(){
    this.themeService.currentTheme.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }

  toggleTheme(): void {
    // const currentTheme = this.themeService.getTheme();
    // const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    if (this.currentTheme === 'light') {
      this.themeService.setTheme('light');
      this.currentTheme = 'light';

    } else {
      this.themeService.setTheme('dark');
      this.currentTheme = 'dark';

    }
  }
}
