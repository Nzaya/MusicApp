import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})

export class BodyComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  
  getBodyClass(): string{
    let style
    return '';
  }

}
