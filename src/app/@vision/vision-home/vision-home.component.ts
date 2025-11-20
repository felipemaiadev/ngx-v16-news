import { Component, OnInit } from '@angular/core';
import { FactorySevice } from '../services/Factory.service';
import { Observable } from 'rxjs';
import { Factory, FactoryBase } from '../models/Factory.model';

@Component({
  selector: 'app-vision-home',
  templateUrl: './vision-home.component.html',
  styleUrls: ['./vision-home.component.css']
})
export class VisionHomeComponent implements OnInit {
    
    factories$?: Observable<Array<Factory>>;

    constructor(private factoryService: FactorySevice){ }
 
 
    ngOnInit(): void {
        this.factories$ = this.factoryService.GetAllFactories();

        this.factories$.subscribe((result)  => {

           const values =  result;

           console.log(values);
        })
     }


}

