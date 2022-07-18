import { Component, OnInit,Input } from '@angular/core';
import {Product} from '../interfaces/product';
import { Router } from '@angular/router';
import { ProductdetailsserviceService } from '../services/productdetailssservice.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  // counter = -1;
  // @Input()product:Product={
    
  //     id: 1,
  //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //     price: 109.95,
  //     description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //     category: "men's clothing",
  //     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //     rating: {
  //     rate: 3.9,
  //     count: 120
  //     }
      

  // } 
  @Input() product!:Product;
  constructor(private router: Router,private productdetailsService:ProductdetailsserviceService) { }

  ngOnInit(): void {}
  addItemToCart() {
    this.productdetailsService.addItem(this.product);
  }
  goToDetails(id : number) {
    this.router.navigate(['/product-details' , id]);
  }

}
