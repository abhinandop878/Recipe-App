import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewrecipe',
  templateUrl: './viewrecipe.component.html',
  styleUrls: ['./viewrecipe.component.css']
})
export class ViewrecipeComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  status:boolean=false
  fetchData=()=>{
    this.myapi.viewRecipe().subscribe((data)=>{
      this.recipeData=data
      this.status=true
    })
  }
  recipeData:any=[]
  ngOnInit(): void {
  }

}
