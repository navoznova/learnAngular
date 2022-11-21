import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService{
  shoppingListChanged = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 8),
    new Ingredient('Orange', 5),
    new Ingredient('Limon', 1),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  onAddNewIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.shoppingListChanged.emit(this.ingredients.slice());
  }

  onAddNewIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.shoppingListChanged.emit(this.ingredients.slice());
  }

  constructor() { }
}
