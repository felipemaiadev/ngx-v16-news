import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LocalStorageService } from "../Services/localstorage.service";
import { EnvironmentInjector, inject, isDevMode } from "@angular/core";

export const AuthValidationGuard: CanActivateFn = (
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
) : boolean | UrlTree =>
{
    const tokenService = inject(LocalStorageService);

    // tokenService.setValue("t_id", "mskdalksndivjcasod,apsdoa,");

    const currentUser = tokenService.getValue("t_id");
    console.table()
    const isAnonymous = !currentUser;
   
    if(isAnonymous){
        return inject(Router).createUrlTree(['login'])
    }

    return true;
}