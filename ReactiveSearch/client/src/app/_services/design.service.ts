import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DesignService {
  homeDesign = 'extended';
  constructor(private router: Router) { }
  goHome() {
    switch (this.homeDesign) {
      case 'default':
        this.router.navigateByUrl('/home');
        break;
      case 'extended':
        this.router.navigateByUrl('/home2');
        break;
    }
  }
  changeHome(home : string) {
    this.homeDesign = home;
  }
}
