import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  //Default theme
  public currentTheme = new BehaviorSubject ('light')

  setTheme(theme: string): void{
    this.currentTheme.next(theme);
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('appTheme', theme)
  }

  getTheme() {
    return this.currentTheme;
  }

  constructor() { }
}
