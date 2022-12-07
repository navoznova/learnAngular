import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.interface';

@Injectable({
    providedIn: 'root'
})

export class RecipeService {
    recipes: Recipe[] = [
        new Recipe(1, 'Name1', 'Description1', 'https://www.tourprom.ru/site_media/images/upload/2018/10/7/newsphoto/pinchos.jpg',
            [
                new Ingredient('meat', 3),
                new Ingredient('souce', 2)
            ]),
        new Recipe(2, 'Name2', 'Description2', 'https://www.tourprom.ru/site_media/images/upload/2018/10/7/newsphoto/pinchos.jpg',
            [
                new Ingredient('chicken', 3),
                new Ingredient('potato', 2)
            ]),
        new Recipe(3, 'Name3', 'Description3', 'https://www.tourprom.ru/site_media/images/upload/2018/10/7/newsphoto/pinchos.jpg',
            [
                new Ingredient('chicken', 3),
                new Ingredient('potato', 2)
            ]),
    ];

    constructor(private shopingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipeByIndex(index: number){
        return this.recipes[index];
    };


    onAddNewIngredientViaRecipeService(ingredients: Ingredient[]) {
        this.shopingListService.onAddNewIngredients(ingredients);
    }


}
