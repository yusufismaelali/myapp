import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}
 go(){
   this.router.navigate(['contacts']);
 }
 gal(){
   this.router.navigate(['about']);
 }
 gali(){
   this.router.navigateByUrl('/menu');
 }
}
