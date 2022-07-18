import { Component, OnInit } from '@angular/core';
// import products from '../../assets/products.json';
import { Product } from './../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductlistserviceService } from '../services/productlistservice.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    // productsList: Array<Product> = [];

   product: Product | any;
  //  = {

  //   id: 0,

  //   title: '',

  //   price: 0,

  //   description: '',

  //   category: '',

  //   image: '',

  //   rating: {

  //   rate: 0,

  //   count: 0

  // }};

  constructor(private productlistService:ProductlistserviceService,private activatedRouteService:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.productlistService.getProductById(Number(this.activatedRouteService.snapshot.paramMap.get('id'))).subscribe(product => {
      this.product=product;
    });
    // const activatedRouteID = this.activatedRoute.snapshot.params['id'];

    // this.productDetails = this.productsList.find(

    //   (product) => product.id == activatedRouteID

    // );
    // this.productService.getproductdetails().subscribe((data : any) => {
    //   this.productsList = data
      // .results.map((product : any) => {
      //   return {
      //     ...product,
          // poster_path: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      //   };
      // });
    // });
   
  }

}
