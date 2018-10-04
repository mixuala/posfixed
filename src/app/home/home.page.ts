import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  styleFixed={
    opacity: 0.7,
    position:'fixed',
    top:'0',
    left:'20%',
    width:'80%',
    height:'100%',
    'z-index': '100',
    'background-color':'green'
  }

}
