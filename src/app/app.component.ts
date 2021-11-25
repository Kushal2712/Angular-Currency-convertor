import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  currentval:number=0.0;
  convertval:number=0.0; 


  currency(){
    if(this.currentval<0){
      this.convertval=0;
    }else{
  this.convertval=this.currentval*70;
    }
  }
  currencyusa(){
    if(this.currentval<0){
      this.convertval=0;
    }else{
  this.convertval=this.currentval*70;
    }
  }

  }
  

  
 


