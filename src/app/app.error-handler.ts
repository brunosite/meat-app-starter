import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

export class ErrorHandler{
    static errorHandler(error: Response | any){
        let erroMessage: string

        if(error instanceof Response){
            erroMessage = `Erro ${error.status} ao acessar URL ${error.url} - ${error.statusText}`
        }else{
            erroMessage = error.toString();
        }
        console.log(erroMessage)
        return Observable.throw(erroMessage);
        
    }
}