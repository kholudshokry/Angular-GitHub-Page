
import { Component, OnInit } from '@angular/core';
import{FormControl , FormGroup , Validators} from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  reactiveForm:FormGroup = new FormGroup({
    email: new FormControl('' ,[ Validators.required , Validators.email]),
    password: new FormControl('' , [Validators.required , Validators.minLength(5) , Validators.maxLength(9)]),
    adress: new FormControl('' , Validators.required)
 });
  constructor() { }

  ngOnInit(): void{

  }

  handleReactiveFormSubmit(){
    console.log(this.reactiveForm.value);
  }
  delete(){
    localStorage.clear();
  }
}