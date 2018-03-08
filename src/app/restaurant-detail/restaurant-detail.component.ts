import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantService: RestaurantService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.restaurant(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
