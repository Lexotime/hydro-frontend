import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url = 'http://172.20.10.2:3000/crud-capteur';

  constructor(private http: HttpClient) { }

  recupAllData(){
    return this.http.get(`${this.url}`);
  }

  putData(data: any){
    return this.http.post(`${this.url}`,data);
  }
}
