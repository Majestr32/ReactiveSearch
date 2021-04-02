import { Component, OnInit } from '@angular/core';
import { DesignService } from '../_services/design.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private design: DesignService) { }
  
  ngOnInit(): void {

  }
  goHome() {
    this.design.goHome();
  }
  changeHome1() {
    this.design.changeHome('default');
    this.design.goHome();
  }
  changeHome2() {
    this.design.changeHome('extended');
    this.design.goHome();
  }

}
