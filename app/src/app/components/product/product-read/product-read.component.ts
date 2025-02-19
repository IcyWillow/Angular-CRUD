import { ProductService } from './../product.service';
import { Component, OnInit} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})

export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.read().subscribe(products => {
      this.products = products;
    })
  }
  
  delete(id: string): void {
   // const id = this.route.snapshot.paramMap.get('id')
    this.ProductService.delete(id);
  }

}
