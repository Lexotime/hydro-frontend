import { Component } from '@angular/core';
import { CrudService } from './services/crud.service';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public donnees: any;

  constructor(private crudService: CrudService){}

  ngOnInit(){
    this.crudService.recupAllData().subscribe(data=>{
      console.log(data);
      this.donnees = data;
    });
  }
  
}
