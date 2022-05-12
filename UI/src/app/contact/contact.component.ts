import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DemandService } from '../shared/Services/demand.service';
import { AcademicYearsService } from '../shared/Services/academic_year.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit  {

  
  form: FormGroup ;
  DJANGO_SERVER = 'http://127.0.0.1:8000'
  response: any;
  fileURL: any;
  file: any;
  filename:string;
  constructor(  private http :HttpClient, private demandService: DemandService) { 
    this.form = new FormGroup({
      first_name: new FormControl(),
      last_name: new FormControl(),
      dob: new FormControl(),
      address: new FormControl(),
      email: new FormControl(),
      block_year: new FormControl(),
      // file: new FormControl(),
      university: new FormControl(),
      specialite: new FormControl(),
      level: new FormControl(),
      bac_year: new FormControl(),
      avg_cumulative: new FormControl(),
      bac_avg: new FormControl(),
    });
  }
  profile: ['']
  ngOnInit() {
  }

uploadFile(event: any){
  if (event.target.files.length > 0) {
    let file = event.target.files[0];

  }
}
 
  
  onSubmit() {
    console.log(this.form.value)
    let data = this.form.value;
    data['AcademicYear'] = '1';
    data['path'] = this.file;

    // data['path']['filename'] = this.form.value['first_name'];
    this.demandService.postDemand(data).subscribe((data)=>{console.log(data)}
    ,(error)=>{console.log(error)});
  }


}
