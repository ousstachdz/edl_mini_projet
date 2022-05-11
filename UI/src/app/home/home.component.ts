import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '../models/project';
import { Project } from '../shared/Services/progect.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageModel } from '../models/message';
import { JsonPipe } from '@angular/common';

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
export class HomeComponent implements OnInit  {


  constructor( private http :HttpClient) { }

  ngOnInit(): void {
  }
 

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
