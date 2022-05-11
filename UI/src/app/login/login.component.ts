import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/Services/auth.service'
import {Router} from '@angular/router'
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logindata = {
    email:'',
    password:''
  };

  constructor(private authService:AuthService, private route :Router) { }

  ngOnInit(): void {
  }

  userlogin(){
    this.authService.userlogin(this.logindata)
    .subscribe((value:boolean) =>{
      if(value){
        this.route.navigate(['profil'])
      }
    }

    )
  }

}
