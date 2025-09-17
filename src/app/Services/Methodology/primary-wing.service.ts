import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PrimaryWingService {

  constructor(private http: HttpClient) { }

  PrimaryWing() {
    this.http.post('http://localhost:8080/addStudentDetails', {}).subscribe(response => {
      console.log('Response from server:', response);
    }, error => {
      console.error('Error occurred:', error);
    });
  }
}
