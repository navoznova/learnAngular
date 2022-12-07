import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupName } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';


@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
    id!: number;
    isEditMode = false;
    recipeForm!: FormGroup;

    constructor(private route: ActivatedRoute,
                private recipeService: RecipeService) { }

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.isEditMode = params['id'] != null;
                this.initForm();
            }
        )
    }

    initForm(){
        let name = '';
        let path = '';
        let description = '';
        let ingredientsArray = new FormArray([]);

        if(this.isEditMode){
            let currentRecipe = this.recipeService.getRecipeByIndex(this.id);
            name = currentRecipe.name;
            path = currentRecipe.imagePath;
            description = currentRecipe.description
            if(currentRecipe.ingredients){
                for(let ingredient of currentRecipe.ingredients) {
                    ingredientsArray.push(new FormGroup ({
                        'name': new FormControl(ingredient.name),
                        'amount': new FormControl(ingredient.amount),
                    }));
                }
            }
        }

        this.recipeForm = new FormGroup ({
            'name': new FormControl(name),
            'path': new FormControl(path),
            'description': new FormControl(description),
            'ingredients': ingredientsArray
           
        })
    }

    onSubmit(){
        console.log(this.recipeForm)
    }

    get controls() { // a getter!
        return (<FormArray>this.recipeForm.get('ingredients')).controls;
      }

}
