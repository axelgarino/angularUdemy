import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  allowUsername = false;
  username = '';

  count = [];
  i = 0;
  showSecret = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  clickButton(){
    this.showSecret = !this.showSecret;
    this.i ++;
    this.count.push(this.i);
  }

}
