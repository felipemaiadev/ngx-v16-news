import { Injectable } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Injectable({
    providedIn:'root'
})
export class LocalStorageService{


    constructor() {}

    public getValue(key: string) : string | null
    {
        console.log("Try GET values")    
        return localStorage.getItem(key) 

    }

    public setValue(key: string, value: string)
    {
           console.log("Try SET values")
            localStorage.setItem(key, value) 
    }

}