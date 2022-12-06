import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.module';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService{
  shoppingListChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 8),
    new Ingredient('Orange', 5),
    new Ingredient('Limon', 1),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredientToEdit(index: number){
    return this.ingredients[index];
  }

  onAddNewIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.shoppingListChanged.next(this.ingredients.slice());
  }

  onAddNewIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.shoppingListChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, ingredient: Ingredient){
    this.ingredients[index] = ingredient;
    this.shoppingListChanged.next(this.ingredients.slice());
  }

  deleteIngredients(index: number){
    this.ingredients.splice(index, 1);
    this.shoppingListChanged.next(this.ingredients.slice());
  }

  constructor() { }
}
