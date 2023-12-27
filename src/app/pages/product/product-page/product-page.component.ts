import { Component } from '@angular/core';
import {ProductViewCardsComponent} from "../../../share/cards/product-view-cards/product-view-cards.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    ProductViewCardsComponent,
    RouterLink
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

}
