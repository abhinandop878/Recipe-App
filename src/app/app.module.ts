import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { ViewrecipeComponent } from './viewrecipe/viewrecipe.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes:Routes=[
  {
    path:"",component:AddRecipeComponent
  },
  {
    path:"viewRecipe",component:ViewrecipeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddRecipeComponent,
    ViewrecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
