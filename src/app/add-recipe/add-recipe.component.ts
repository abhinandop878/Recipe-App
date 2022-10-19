import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  constructor() { }
  title=""
  description=""
  preparedBy=""
  category=""
  postedDate=""
  readValue=()=>{
    let data={
      "title":this.title,
      "description":this.description,
      "preparedBy":this.preparedBy,
      "category":this.category,
      "postedDate":this.postedDate
    }
  }
  ngOnInit(): void {
  }

}
