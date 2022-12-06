import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from './shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[] | undefined;
    private isSubscribtion!: Subscription;

    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit(): void {
        this.ingredients = this.shoppingListService.getIngredients();
        this.isSubscribtion = this.shoppingListService.shoppingListChanged.subscribe(
            (ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            }
        );
    }

    ngOnDestroy() {
        this.isSubscribtion.unsubscribe();
    }

    onEditIngredient(index: number) {
        this.shoppingListService.startedEditing.next(index);
     }


}

