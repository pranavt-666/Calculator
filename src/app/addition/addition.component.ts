import { Component } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrl: './addition.component.css'
})
export class AdditionComponent {
  constructor(private service:CalcService){

  }
  result:number = 0
  // same functionality can be done like this
  // addNumbers(num1:any, num2:any){
  //   console.log(num1.value, num2.value);
  //   var n1 = Number(num1.value)
  //   var n2 = Number(num2.value)
  //   var res = n1+n2
  //   this.result = res
  // }
  addNumbers(num1:any, num2:any){
    console.log(num1.value, num2.value);
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let data = {
      "num1":n1,
      "num2":n2
    }
    this.service.performAddition(data).then(res=>res.json()).then(data=>(this.result=data.data));
  }
}
