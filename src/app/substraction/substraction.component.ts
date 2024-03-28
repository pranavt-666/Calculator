import { Component } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'app-substraction',
  templateUrl: './substraction.component.html',
  styleUrl: './substraction.component.css'
})
export class SubstractionComponent {
  constructor(private services:CalcService){

  }
  num1: any;
  num2: any;
  ans: any;

  calculate() {
    // this.ans = this.num1 - this.num2;
    let data = {
      "num1":this.num1,
      "num2":this.num2
    }
    this.services.performSubtraction(data).then(data=>data.json()).then(res=>this.ans = res.data)
  }
}

  // sub(){
  // console.log(this.num1, this.num2);
    // let n1:number = Number(num1.value)
    // let n2:number = Number(num2.value)
    // this.result = n1>n2?n1-n2:n2-n1

    
  // }
