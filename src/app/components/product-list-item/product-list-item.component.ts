import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {
  products: Product[];
  currentProduct: Product;

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

  addToCart(e, product: Product) {
    this.currentProduct = product;
    this.currentProduct.cartCount++;
    e.preventDefault();
  }
}
