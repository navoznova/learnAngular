import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.interface';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-details',
    templateUrl: './recipe-details.component.html',
    styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
    recipe!: Recipe;
    id!: number;

    constructor(private recipeService: RecipeService,
                private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.recipe = this.recipeService.getRecipeByIndex(this.id);
            }
        )
    }

    addIngredientsFromRecipeToList() {
        this.recipeService.onAddNewIngredientViaRecipeService(this.recipe.ingredients);
    }

    onEditRecipe() {
        this.router.navigate(['edit'], {relativeTo: this.route});
    }

    onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);

    }

}
