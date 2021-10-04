import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.component.html',
  styleUrls: ['./cooking.component.scss'],
})
export class CookingComponent implements OnInit {
  seaFood: any = [];
  cart: any = [];
  alert = false;
  constructor(private api: ApiService, private title: Title) {
    this.title.setTitle('Welcome To SeaFood Page');
  }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.api.getCooking().subscribe((res) => {
      console.log(res);
      this.seaFood = res.meals;
    });
  }
  addToCart(i: any) {
    if (localStorage.getItem('cart') !== null) {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
      this.cart.push(this.seaFood[i]);
      localStorage.setItem('cart', JSON.stringify(this.cart));
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, 3000);
    } else {
      this.cart.push(this.seaFood[i]);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
}
