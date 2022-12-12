import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.interface';
import { RecipeService } from '../recipes/recipe.service';
import { map } from 'rxjs/operators';
import { Ingredient } from './ingredient.module';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor(private http: HttpClient, private recipes: RecipeService) { }

    storageData() {
        const recipe = this.recipes.getRecipes();
        // const recipe:Recipe[] = [
        //     new Recipe(1, 'Name1', 'Description1', 'https://www.tourprom.ru/site_media/images/upload/2018/10/7/newsphoto/pinchos.jpg',
        //         [
        //             new Ingredient('meat', 3),
        //             new Ingredient('souce', 2)
        //         ]),
        //     new Recipe(2, 'Name2', 'Description2', 'https://www.tourprom.ru/site_media/images/upload/2018/10/7/newsphoto/pinchos.jpg',
        //         [
        //             new Ingredient('chicken', 3),
        //             new Ingredient('potato', 2)
        //         ]),
        //     new Recipe(3, 'Name3', 'Description3', 'https://www.tourprom.ru/site_media/images/upload/2018/10/7/newsphoto/pinchos.jpg',
        //         [
        //             new Ingredient('chicken', 3),
        //             new Ingredient('potato', 2)
        //         ]),
        // ];
    
        this.http.put('https://recipe-book-b1e27-default-rtdb.firebaseio.com/recipe.json', recipe).subscribe(
            (response) => {
                console.log(response);
            }
        );
    }

    getData() {
        this.http
            .get<Recipe[]>('https://recipe-book-b1e27-default-rtdb.firebaseio.com/recipe.json')
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                    return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
                })
            }))
            .subscribe(
                (response) => {
                    this.recipes.setRecipes(response);
                }
            );
    }
}
