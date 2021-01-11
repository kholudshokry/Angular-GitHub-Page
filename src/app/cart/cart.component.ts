import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  proarr:any;
  constructor() { }

  ngOnInit(): void {
  
  if(localStorage.getItem("productsData") != null){
    this.proarr=JSON.parse(localStorage.getItem("productsData"));
  }

}
 deleteItem(i)
  {
    //  let indexDeleted = proInfo.id;
     this.proarr =JSON.parse(localStorage.getItem("productsData"));
     for(let item = 0; item < this.proarr.length; item++)
     {
         if (this.proarr[item]['id'] == i.id) {
          this.proarr.splice(item, 1);
          localStorage.setItem('productsData', JSON.stringify(this.proarr));
        return true;
        }

     }
    }
  }
