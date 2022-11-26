import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.module';
import { Recipe } from '../recipe.module';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-details.component.html',
    styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
    recipe!: Recipe;

    constructor(private recipeService: RecipeService) { }

    ngOnInit(): void {
    }

    addIngredientsFromRecipeToList() {
        this.recipeService.onAddNewIngredientViaRecipeService(this.recipe.ingredients);
    }

}
