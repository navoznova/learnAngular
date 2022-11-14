import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.module';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
    @Input() recipeItem: Recipe | undefined;
    @Output() selectedRecipeAction = new EventEmitter<void>();

    onSelected() {
        this.selectedRecipeAction.emit();
    }

    constructor() { }

    ngOnInit(): void {
    }

}
