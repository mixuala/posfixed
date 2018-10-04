import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  // styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {

  style = {
    'background-color': 'red',
    // 'position':'fixed',
    'width':'100%',
    'height':'200px',
  }

  constructor() { }

}