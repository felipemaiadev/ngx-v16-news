import { Injectable } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Injectable({
    providedIn:'root'
})
export class LocalStorageService{


    constructor() {}

    public getValue(key: string) : string | null
    {
            return localStorage.getItem(key) 
    }

    public setValue(key: string, value: string)
    {
            localStorage.setItem(key, value) 
    }

}