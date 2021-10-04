import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.component.html',
  styleUrls: ['./chicken.component.scss'],
})
export class ChickenComponent implements OnInit {
  chickArr: any = [];
  cart: any = [];
  alert = false;
  constructor(private api: ApiService, private title: Title) {
    this.title.setTitle('Welcome To Chicken Page');
  }

  ngOnInit(): void {
    this.getChicken();
  }
  getChicken() {
    this.api.getChicken().subscribe((res) => {
      console.log(res);
      this.chickArr = res.meals;
    });
  }
  addToCart(i: any) {
    if (localStorage.getItem('cart') !== null) {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
      this.cart.push(this.chickArr[i]);
      localStorage.setItem('cart', JSON.stringify(this.cart));
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, 3000);
    } else {
      this.cart.push(this.chickArr[i]);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
}
