import { Component } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrl: './factorial.component.css'
})
export class FactorialComponent {
  
  num:any;
  res:any;
  constructor(private service:CalcService){

  }
  // factorial(){
  //   this.res = 1
  //   while(this.num>0){
  //     this.res *= this.num
  //     this.num -= 1
  //   }
  // }
  factorial(){
    let data = {"num":this.num}
    this.service.performFactorial(data).then(data=>data.json()).then(fact=>this.res=fact.data)
  }
}
