import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewrecipe',
  templateUrl: './viewrecipe.component.html',
  styleUrls: ['./viewrecipe.component.css']
})
export class ViewrecipeComponent implements OnInit {

  constructor() { }
  status:boolean=false
  recipeData=[]
  ngOnInit(): void {
  }

}
