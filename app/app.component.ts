import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <section>
  	<my-component1></my-component1>
  </section>
  <br>
  <section>
  	<my-component2></my-component2>
  </section>
  `
})
export class AppComponent { }
