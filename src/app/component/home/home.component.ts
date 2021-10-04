import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeArr: any = [];
  cart: any = [];
  alert = false;
  constructor(private api: ApiService, private title: Title) {
    this.title.setTitle('Welcome To Home Page');
  }

  ngOnInit(): void {
    this.getHome();
  }
  getHome() {
    this.api.getHome().subscribe((res) => {
      this.homeArr = res.meals;
    });
  }
  addToCart(i: any) {
    if (localStorage.getItem('cart') !== null) {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
      this.cart.push(this.homeArr[i]);
      localStorage.setItem('cart', JSON.stringify(this.cart));
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, 3000);
    } else {
      this.cart.push(this.homeArr[i]);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
}
