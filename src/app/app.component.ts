import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';
  constructor(private router: Router) { }
  ngOnInit(): void {
    //  console.log("router1")
    //setTimeout(() => {
    //console.log("router2")
    //this.router.navigate(['home']);
    //}, 5000);

  }

}