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

  projects:ProjectModel[] = []
  constructor( private project:Project, private http :HttpClient) { }

  ngOnInit(): void {
    this.getProjects()
  }
 
  getProjects(){
    this.project.getAllProjects()
    .subscribe((value:any)=>{
      value.forEach((element:any) => {
        let p = new ProjectModel(element.id,element.title,element.description,element.link , element.type)
        this.projects.push(p)
      });
    })
    console.log(this.projects)
  }

  sendMessage(){
    let message = new MessageModel('test','test','test@test.com','test')
     console.log( message )
    this.http.post('http://127.0.0.1:8000/api/message/create',message,{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
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
      case ' Skills ':{
        window.scroll({
        top:800,
        behavior:'smooth'
        })
        break
      }
      case ' Project ':{
        window.scroll({
        top:1710,
        behavior:'smooth'
        })
        break
      }
      case ' Contact ':{
        window.scroll({
        top:2315,
        behavior:'smooth'
        })
        break
      }
    }
    
  }
  

}
