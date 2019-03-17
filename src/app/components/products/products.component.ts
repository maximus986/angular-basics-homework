import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[];

  constructor() {}

  ngOnInit() {
    this.products = [
      {
        title: 'Backpack for men',
        photo: 'https://colorlib.com/etc/fashe/images/item-01.jpg',
        oldPrice: 300,
        price: 280,
        cartCount: 0
      },
      {
        title: 'Backpack Black',
        photo: 'https://colorlib.com/etc/fashe/images/item-02.jpg',
        oldPrice: 0,
        price: 190,
        cartCount: 0
      },
      {
        title: 'Spring Jacket',
        photo: 'https://colorlib.com/etc/fashe/images/item-03.jpg',
        oldPrice: 0,
        price: 160,
        cartCount: 0
      },
      {
        title: 'White shoes',
        photo: 'https://colorlib.com/etc/fashe/images/item-06.jpg',
        oldPrice: 0,
        price: 130,
        cartCount: 0
      }
    ];
  }
}
