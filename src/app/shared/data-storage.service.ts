import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.interface';
import { RecipeService } from '../recipes/recipe.service';
import { Ingredient } from './ingredient.module';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipes: RecipeService) { }

  storageData(){
    const recipe = this.recipes.getRecipes(); 
    this.http.put('https://recipe-book-b1e27-default-rtdb.firebaseio.com/recipe.json', recipe).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  getData(){
    this.http.get('https://recipe-book-b1e27-default-rtdb.firebaseio.com/recipe.json').subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
}
