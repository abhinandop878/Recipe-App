import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  constructor(private myapi:ApiService) { }
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
    this.myapi.addRecipe(data).subscribe((response)=>{
      console.log(response)
      alert("Successfully Added !")
      this.title=""
      this.description=""
      this.preparedBy=""
      this.category=""
      this.postedDate=""
    })
  }
  ngOnInit(): void {
  }

}
