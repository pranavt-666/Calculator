import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {
  header = new Headers()
  constructor() { 
    this.header.append('content-type','application/json;charset=utf-8;')
  }

  performAddition(data:any){
    let options = {
      method:"POST",
      body:JSON.stringify(data),
      headers:this.header
      // headers: {
      //   'Content-type': 'application/json; charset=UTF-8',
      // }
      
    }
    return fetch("http://127.0.0.1:8000/addition/", options)
  }

  performSubtraction(data:any){
    let options = {
      method:"POST",
      body:JSON.stringify(data),
      headers:this.header

    }
    return fetch("http://127.0.0.1:8000/sub/", options)
  }

  performFactorial(data:any){
    let options = {
      method:"POST",
      body:JSON.stringify(data),
      // Headers: authorization token should given through this
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
      
    }
    return fetch('http://127.0.0.1:8000/factorial/', options)
  }
}
