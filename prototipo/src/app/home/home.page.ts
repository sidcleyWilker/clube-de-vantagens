import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  navigatedWithParams(){
    console.log("Teste")
  }

  navigatedWithObject(){
    console.log("aaaaa")
    const params: NavigationExtras = {
      queryParams: {userid: 123, color: 'green'}
    }
    this.router.navigate(['/lojas'], params)
    console.log("veio")
  }


}
