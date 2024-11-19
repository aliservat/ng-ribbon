import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./ribbon.component.scss']
})
export class RibbonComponent {
  clicked: boolean = false
  cutRibbon: boolean = false
  firstTime: boolean = true
  constructor() {
    localStorage.getItem('cutRibbon') === null?
      this.firstTime = true:
      this.firstTime = false
  }
  cutting() {
    this.cutRibbon = true
    // localStorage.setItem('cutRibbon','1')
    setTimeout(() => {
      this.firstTime = false
    },2500)
  }
}
