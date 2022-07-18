import { Component, OnInit } from '@angular/core';
// import products from '../../assets/products.json';
import { Product} from '../interfaces/product';
import { ProductlistserviceService } from '../services/productlistservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    ProductList : Array<Product> = [];
    productsOfCategory:Product[];

  constructor( private productsService:ProductlistserviceService) {
    this.productsOfCategory = [];
   }

  ngOnInit(): void {
    // console.log(this.ProductList);
    this.productsService.getproductList().subscribe((data : any) => {
      this.ProductList = data
      // .results.map((product : any) => {
      //   return {
      //     ...product,
          // poster_path: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      //   };
      // });
    });
  }

}
