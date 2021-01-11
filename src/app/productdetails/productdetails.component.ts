import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  index;
  SelectedProduct:any ={};
  productsArr: any;
  constructor( Active : ActivatedRoute , Data:  DataService ) {
    this.index = Active.snapshot.paramMap.get("id");
    Data.getProductslist().subscribe((data)=>{
      this.SelectedProduct = data[this.index]
      console.log(this.SelectedProduct);
    });
   }

  ngOnInit(): void {
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

