import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   @Output() recipeWasSelected = new EventEmitter<Recipe>();

    onRecipeSelected(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }

    recipes: Recipe[] = [
        new Recipe('Name1', 'Description1', 'https://www.tourprom.ru/site_media/images/upload/2018/10/7/newsphoto/pinchos.jpg'),
        new Recipe('Name2', 'Description2', 'https://www.tourprom.ru/site_media/images/upload/2018/10/7/newsphoto/pinchos.jpg'),
        new Recipe('Name3', 'Description3', 'https://www.tourprom.ru/site_media/images/upload/2018/10/7/newsphoto/pinchos.jpg'),
        new Recipe('Name3', 'Description3', 'https://www.tourprom.ru/site_media/images/upload/2018/10/7/newsphoto/pinchos.jpg'),
        new Recipe('Name4', 'Description4', 'https://www.tourprom.ru/site_media/images/upload/2018/10/7/newsphoto/pinchos.jpg'),
        new Recipe('Name5', 'Description5', 'https://www.tourprom.ru/site_media/images/upload/2018/10/7/newsphoto/pinchos.jpg'),
        new Recipe('Name6', 'Description6', 'https://www.tourprom.ru/site_media/images/upload/2018/10/7/newsphoto/pinchos.jpg'),
        new Recipe('Name7', 'Description7', 'https://www.tourprom.ru/site_media/images/upload/2018/10/7/newsphoto/pinchos.jpg')
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
