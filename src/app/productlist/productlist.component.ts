import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})



export class ProductlistComponent implements OnInit {
  data: any; 
  productsArr: any;
  term: string;

  constructor( private dataservice : DataService) { }

  ngOnInit(): void {
    this.dataservice.getProductslist().subscribe({
      next: (data) => {
        console.log('success:' , data);
        this.data = data;
        console.log(this.data = data);

      },
      error : (msg) => {
        console.log('error:' , msg);
      },
    });
  }
  addCard(proData)
{
     if(localStorage.getItem("productsData") == null)
      {
        this.productsArr = [];
        this.productsArr.push(proData);
        localStorage.setItem("productsData" , JSON.stringify(this.productsArr));

      }
      else
      {
        this.productsArr.push(proData)
        localStorage.setItem("productsData" , JSON.stringify(this.productsArr));
      }


    }

}
