import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;
  total = 0;
  initialValue = 0;
  buttons=[1,2,3,4,-5,6,7,8,9,10]

  
  totalCount(countValue) {
    this.total = this.total + countValue;
    //console.log(this.count);
    //this.total=this.total+this.count;// wrong logic!
  }
}
