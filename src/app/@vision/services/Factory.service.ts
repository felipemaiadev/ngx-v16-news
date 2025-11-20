import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Factory, FactoryBase } from "../models/Factory.model";
import { environment  } from "src/environments/environment.development";


@Injectable({
    providedIn:'root'
})
export class FactorySevice {

    headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

    constructor(private http: HttpClient) 
    { 

    }

    public GetAllFactories() : Observable<Array<Factory>>
    {
        return this.http.get<Array<Factory>>(`http://localhost:5110/api/factories/`, { headers: this.headers });
    }
}