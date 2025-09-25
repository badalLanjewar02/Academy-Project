import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrimaryWingService {

  url = "http://localhost:8080/upload";
  constructor(private http: HttpClient) { }

  postData(data:any){
    return this.http.post(this.url,data);
  }
}
