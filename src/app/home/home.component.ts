import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myData:any
  constructor( private api: ApiService) { }

  ngOnInit(): void {
    this.api.getData().subscribe((data)=>{
      console.log(data)
      this.myData=data;
    })
  }

}
