import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-canadian-food',
  templateUrl: './canadian-food.component.html',
  styleUrls: ['./canadian-food.component.scss'],
})
export class CanadianFoodComponent implements OnInit {
  canArr: any = [];
  cart: any = [];
  alert = false;
  constructor(private api: ApiService, private title: Title) {
    this.title.setTitle('Welcome To Canadian Page');
  }

  ngOnInit(): void {
    this.canAll();
  }
  canAll() {
    this.api.getCan().subscribe((res) => {
      console.log(res);
      this.canArr = res.meals;
    });
  }
  addToCart(i: any) {
    if (localStorage.getItem('cart') !== null) {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
      this.cart.push(this.canArr[i]);
      localStorage.setItem('cart', JSON.stringify(this.cart));
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, 3000);
    } else {
      this.cart.push(this.canArr[i]);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
}
