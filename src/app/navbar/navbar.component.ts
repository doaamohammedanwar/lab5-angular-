import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductdetailsserviceService } from '../services/productdetailssservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartCount:number = 0

  constructor( private router:Router,private productdetailsService:ProductdetailsserviceService) { }

  ngOnInit(): void {
    this.productdetailsService.getCartItemsCountStatus().subscribe(count => {
      this.cartCount = count;
    })
  }

}
