import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../shared/Services/auth.service'
import {AcademicYearsService} from '../shared/Services/academic_year.service'
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user = {
    id : ''
  }

  constructor( private authService:AuthService, private AcademicYearsService : AcademicYearsService, private route:Router) { }

  ngOnInit(): void {

    this.authService.userInfo.subscribe(value=>{
      if(value){
        this.user.id = value.user_id
      }
    })

    this.getAllyears()
  }

  getAllyears(){
    this.AcademicYearsService.getAll().subscribe( (value:any) =>{
      console.log(value)
    })
  }

  logout(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.route.navigate(['/'])
  }
}
