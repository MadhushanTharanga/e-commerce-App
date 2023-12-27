import { Component } from '@angular/core';
import {MainSliderComponent} from "./inner-items/main-slider/main-slider.component";
import {ProductViewCardsComponent} from "../../../share/cards/product-view-cards/product-view-cards.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MainSliderComponent,
    ProductViewCardsComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
