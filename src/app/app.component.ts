import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ak-ithaya';
       hidden = false;
  
    toggleBadgeVisibility() {
      this.hidden = !this.hidden;
    }
}
