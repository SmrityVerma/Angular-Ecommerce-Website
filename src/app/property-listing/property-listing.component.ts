import { Component } from '@angular/core';

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.css']
})
export class PropertyListingComponent {


  products = [
    { name: 'Item1', price: 1.00, image: '../assets/image1.png' },
    { name: 'Item2', price: 0.50, image: '../assets/image 2.png' },
    { name: 'Item3', price: 1.00, image: '../assets/image 3.png' },
    { name: 'Item4', price: 1.00, image: '../assets/image 4.png' },
    { name: 'Item5', price: 1.00, image: '../assets/image (5).png' },
    { name: 'Item6', price: 1.00, image: '../assets/image.png' },
    { name: 'Item7', price: 1.00, image: '../assets/image (1).png' },
    { name: 'Item3', price: 1.00, image: '../assets/image (2).png' },
    { name: 'Item3', price: 1.00, image: '../assets/image (3).png' },
    { name: 'Item3', price: 1.00, image: '../assets/image (4).png' },
    { name: 'Item3', price: 1.00, image: '../assets/image.png' },
    { name: 'Item3', price: 1.00, image: '../assets/image1.png' },
    // { name: 'Item3', price: 1.00, image: '../assets/image (6).jpg' },
    // { name: 'Item3', price: 1.00, image: '../assets/image (7).jpg' },
    // { name: 'Item3', price: 1.00, image: '../assets/image (8).jpg' },

    
  ];


}
