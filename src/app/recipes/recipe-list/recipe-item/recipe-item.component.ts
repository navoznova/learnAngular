import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../recipe.interface';
import { RecipeService } from '../../recipe.service';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
    @Input() recipeItem: Recipe | undefined;
    @Input() index!: number;

    constructor(private recipeService: RecipeService,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
    }

}
