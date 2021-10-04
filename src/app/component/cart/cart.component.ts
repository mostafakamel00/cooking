import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart: any = [];
  homeArr: any = [];
  alert = false;
  constructor(private api: ApiService, private title: Title) {
    this.title.setTitle('Welcome To Cart Page');
  }

  ngOnInit(): void {
    if (localStorage.getItem('cart') !== null) {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
    }
  }
  delete(i: any) {
    this.cart.splice(i, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.alert = true;
    setTimeout(() => {
      this.alert = false;
    }, 3000);
  }
}
