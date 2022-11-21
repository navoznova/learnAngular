import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { Recipe } from './recipe.module';

@Injectable({
    providedIn: 'root'
})

export class RecipeService {
    recipeSerlected = new EventEmitter<Recipe>();


    recipes: Recipe[] = [
        new Recipe('Name1', 'Description1', 'https://www.tourprom.ru/site_media/images/upload/2018/10/7/newsphoto/pinchos.jpg',
            [
                new Ingredient('meat', 3),
                new Ingredient('souce', 2)
            ]),
        new Recipe('Name2', 'Description2', 'https://www.tourprom.ru/site_media/images/upload/2018/10/7/newsphoto/pinchos.jpg',
            [
                new Ingredient('chicken', 3),
                new Ingredient('potato', 2)
            ]),
        new Recipe('Name3', 'Description3', 'https://www.tourprom.ru/site_media/images/upload/2018/10/7/newsphoto/pinchos.jpg',
            [
                new Ingredient('chicken', 3),
                new Ingredient('potato', 2)
            ]),
    ];

    constructor() { }

    getRecipes() {
        return this.recipes.slice();
    }
}
