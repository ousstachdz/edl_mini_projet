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
  year_demands:any;
  user = {
    id : '',
    email:'',
    user_name: '',
    last_name: '',
    first_name: ''
  
  }
  years:any ;
  demands:any;
  result:any;
  constructor( private authService:AuthService, private AcademicYearsService : AcademicYearsService, private route:Router) { }

  ngOnInit(): void {
    this.getUser()
    this.getAllyears()
    this.itialState()
  }

  itialState(){
    this.demands=this.years[this.years.length-1]
    console.log(this.demands)

  }
  getUser(){
    this.authService.userInfo.subscribe(value=>{
      if(value){
        this.user.id = value.user_id
      }
  
      this.authService.getUser(this.user.id).subscribe(
        (value)=>{
          this.user=value
        }
      )
    })
  }

  getAllyears(){
    this.AcademicYearsService.getAll().subscribe( (value:any) =>{
      console.log(value);
      this.years=value;
    })
  }

  selectedYear(event){
    this.demands=this.years[event.target.value].year_demands
  }

  logout(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.route.navigate(['/'])
  }
}
