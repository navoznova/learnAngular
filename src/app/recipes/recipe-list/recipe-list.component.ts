import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.interface';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
    recipes: Recipe[] = [];
    subcription!: Subscription;

    constructor(private recipeService: RecipeService,
                private router: Router,
                private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.recipes = this.recipeService.getRecipes();
        this.subcription = this.recipeService.recipeListChanged.subscribe(
            (recipes: Recipe[]) => {
                this.recipes = recipes;
            }
        );
    }

    ngOnDestroy(): void{
        this.subcription.unsubscribe;
    }

    onRouteNewRecipePage() {
        this.router.navigate(['new'], {relativeTo: this.route});
    }

}
