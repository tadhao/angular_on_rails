import { Component } from '@angular/core';
import templateString from './app.component.html'

@Component({
  selector: 'hello-angular',
  template: templateString
})
export class AppComponent {
  name = 'Tushar!';
}
