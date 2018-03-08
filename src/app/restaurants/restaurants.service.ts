import { Restaurant } from "../restaurant/restaurant.model";
import { Http } from "@angular/http";
import { MEAT_API } from "../app.api";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from "../app.error-handler";
import { MenuItemModel } from "../restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantService {
    
    constructor(private http: Http) { }

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.errorHandler);
    }

    restaurant(id: string): Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.errorHandler)
    }

    reviews(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(response => response.json())
            .catch(ErrorHandler.errorHandler)
    }

    menu(id: string): Observable<MenuItemModel[]>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
            .map(response => response.json())
            .catch(ErrorHandler.errorHandler)
    }
}