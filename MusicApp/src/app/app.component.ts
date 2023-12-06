import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { AuthService } from './services/auth.service';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MusicApp';

  isLoggedIn = false;

  constructor(
    private themeService: ThemeService,
    private authService: AuthService
  ) {}

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((status) => {
      this.isLoggedIn = status;
    });

    const savedTheme = localStorage.getItem('appTheme');
    const themeToSet = savedTheme || 'light';
    this.themeService.setTheme(themeToSet);
  }
}
