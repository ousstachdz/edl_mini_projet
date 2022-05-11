import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../shared/Services/auth.service'
import { Message } from '../shared/Services/message.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user = {
    id : ''
  }

  constructor( private authService:AuthService, private messageService: Message, private route:Router) { }

  ngOnInit(): void {
    this.authService.userInfo.subscribe(value=>{
      if(value){
        this.user.id = value.user_id
      }

    })
    this.getAllmesssages()
  }
  getAllmesssages(){
    this.messageService.getAllMessages().subscribe( (value:any) =>{
      console.log(value)
    })
  }
  logout(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.route.navigate(['/'])
  }
}
