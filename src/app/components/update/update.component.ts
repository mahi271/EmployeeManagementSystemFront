import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeserviceService } from 'src/app/Services/employeeservice.service';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  id:number=0;
  submitted=false;
  employee = new Employee();
  constructor(private service:EmployeeserviceService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(){
    this.employee=new Employee();
    this.id=this.route.snapshot.params['id'];
    this.service.getOneEmployee(this.id).subscribe((data)=>{
      console.log("got data");

      this.employee=data;
    })
  }

  onsubmit(){
    this.submitted=true;
    this.save();

  }
  save(){
    this.service.updateEmployee(this.employee).subscribe();
    

  }
}
