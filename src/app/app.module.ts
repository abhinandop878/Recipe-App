import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { ViewrecipeComponent } from './viewrecipe/viewrecipe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddRecipeComponent,
    ViewrecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
