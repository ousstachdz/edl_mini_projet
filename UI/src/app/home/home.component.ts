import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    trigger('blueFade',[
      transition('void => *',[
        style({color: 'blue',opacity:0}),
        animate(1000)
      ])
    ]),
     trigger('fade',[
      transition('void => *',[
        style({opacity:0}),
        animate(1000)
      ])
    ])
  ]
  
})
export class HomeComponent   {


  constructor() { }


  move(dom:HTMLElement){
    switch  (dom.innerHTML){
      case ' Home ':{
          window.scroll({
        top:0,
        behavior:'smooth'
      })

        break
      }
      case 'Faculties':{
        window.scroll({
        top:800,
        behavior:'smooth'
        })
        break
      }
      case ' # ':{
        window.scroll({
        top:1710,
        behavior:'smooth'
        })
        break
      }
      case ' # ':{
        window.scroll({
        top:2315,
        behavior:'smooth'
        })
        break
      }
    }
    
  }
  

}
