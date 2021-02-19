import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


import { IProduct} from './product';
import { ProductService } from './product.service';

@Component({
  //selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string ='Product Detail';
  errorMessage = '';
  product: IProduct;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { }
  onBack(): void {
    this.router.navigate(['/products'])
  }

  getProductById(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

 
  ngOnInit(): void {
    
    const param=+this.route.snapshot.paramMap.get('id');
    
    this.pageTitle +=`:${param}`;
    
    if (param) {
      const id = +param;
      this.getProductById(id);
    }
  }

  

}
