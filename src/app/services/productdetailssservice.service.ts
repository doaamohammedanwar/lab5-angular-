import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from "rxjs";
import { Iitem } from '../interfaces/iitem';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsserviceService {
  private cartItems:Iitem[];
  private cartItemsCount:BehaviorSubject<number>;

  constructor() {
    //private http: HttpClient
    this.cartItems = [];
    this.cartItemsCount = new BehaviorSubject<number>(0);
   }
   addItem(product:Product){
    this.cartItems.push({image: product.image, name: product.title, price: product.price, quantity: 0 } as Iitem);
    this.cartItemsCount.next(this.cartItems.length);
  }

  getCartItemsCountStatus(){
    return this.cartItemsCount.asObservable();
  }

  getAllItems(){
    return this.cartItems;
  }

  deleteItem(indexItem: number) {
    if (indexItem > -1){
      this.cartItems.splice(indexItem, 1);
      this.cartItemsCount.next(this.cartItems.length);
    }

  }

  decreaseQuantity(indexItem: number) {
    if (indexItem > -1 && this.cartItems[indexItem].quantity > 0)
      this.cartItems[indexItem].quantity--;
  }

  increaseQuantity(indexItem: number) {
    if (indexItem > -1)
      this.cartItems[indexItem].quantity++;
  }
  // getproductdetails() {
  //   return this.http.get(' https://fakestoreapi.com/products/id' 
    
  //    ) }
    }

