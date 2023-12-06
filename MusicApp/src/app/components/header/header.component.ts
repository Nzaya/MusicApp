import { Component, HostListener, Input, OnInit } from '@angular/core';
import { notifications, userItems } from './header-dummy-data';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  isLoggedIn = false;

  canShowSearchAsOverlay = false;

  currentTheme!: string;

  notifications = notifications;
  userItems = userItems;

  constructor(
    private authService: AuthService,
    private themeService: ThemeService
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((status) => {
      this.isLoggedIn = status;
    });
    this.checkCanShowSearchAsOverlay(window.innerWidth);

    this.themeService.currentTheme.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }

  ngOnChanges() {
    this.themeService.currentTheme.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }

  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  checkCanShowSearchAsOverlay(innerWidth: number): void {
    if (innerWidth < 845) {
      this.canShowSearchAsOverlay = true;
    } else {
      this.canShowSearchAsOverlay = false;
    }
  }

  toggleTheme(): void {
    console.log("clicked");

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
