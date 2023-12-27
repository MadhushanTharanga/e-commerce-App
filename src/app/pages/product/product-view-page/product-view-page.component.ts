import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-view-page',
  standalone: true,
  imports: [],
  templateUrl: './product-view-page.component.html',
  styleUrl: './product-view-page.component.css'
})
export class ProductViewPageComponent implements OnInit{

  constructor(private activatedRouter:ActivatedRoute) {
  }
  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(response=>{
      console.log(response.get('id'));
    })
  }


}
