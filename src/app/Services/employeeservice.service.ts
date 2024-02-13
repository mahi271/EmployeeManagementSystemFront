import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  
  baseUrl="http://localhost:8082";
  constructor(private http:HttpClient) { }

  addEmployee(employee:Object){
    return this.http.post(`${this.baseUrl}/employee/saveEmployee`,employee);
  }

  getOneEmployee(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/employee/getEmployee/${id}`);
  }

  getAllEmployee():any{
    return this.http.get(`${this.baseUrl}/employee/getAllEmployee`)
  }

  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/employee/delete/${id}`);
  }
  updateEmployee(employee:Object){
    return this.http.put(`${this.baseUrl}/employee/update`,employee);
  }

}
