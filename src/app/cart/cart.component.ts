import { Component, OnInit } from '@angular/core';
import { Iitem } from '../interfaces/iitem';
import { ProductdetailsserviceService } from '../services/productdetailssservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:Iitem[];
  totalPrice:number = 0

  constructor(private productdetailsService:ProductdetailsserviceService) { 
    this.cartItems=[];
  }

  ngOnInit(): void {
    this.cartItems = this.productdetailsService.getAllItems();
  }
  
  removeItem(indexItem:number) {
    this.totalPrice -= this.cartItems[indexItem].price * this.cartItems[indexItem].quantity;

    this.productdetailsService.deleteItem(indexItem);
  }


  decreaseQuantity(indexItem: number) {

    if (this.cartItems[indexItem].quantity > 0){
      this.productdetailsService.decreaseQuantity(indexItem);
      this.totalPrice -= this.cartItems[indexItem].price;
    }

  }

  increaseQuantity(indexItem: number) {
    this.productdetailsService.increaseQuantity(indexItem);
    this.totalPrice += this.cartItems[indexItem].price;

  }

}
