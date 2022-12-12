import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.interface';

@Injectable({
    providedIn: 'root'
})

export class RecipeService {
    recipeListChanged = new Subject<Recipe[]>();


    recipes: Recipe[] = [];

    constructor(private shopingListService: ShoppingListService) { }

    setRecipes(recipe: Recipe[]){
        this.recipes = recipe;
        this.recipeListChanged.next(this.recipes);
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipeByIndex(index: number){
        return this.recipes[index];
    };

    addNewRecipe(newRecipe: Recipe){
        this.recipes.push(newRecipe);
        this.recipeListChanged.next(this.recipes);
    }

    updateNewRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeListChanged.next(this.recipes);
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeListChanged.next(this.recipes);
    }


    onAddNewIngredientViaRecipeService(ingredients: Ingredient[]) {
        this.shopingListService.onAddNewIngredients(ingredients);
    }


}
