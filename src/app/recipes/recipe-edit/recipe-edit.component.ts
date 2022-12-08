import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

    constructor(private recipeService: RecipeService,
        private router: Router,
        private route: ActivatedRoute) { }

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
                        'name': new FormControl(ingredient.name, Validators.required),
                        'amount': new FormControl(ingredient.amount, Validators.required),
                    }));
                }
            }
        }

        this.recipeForm = new FormGroup ({
            'name': new FormControl(name, Validators.required),
            'path': new FormControl(path, Validators.required),
            'description': new FormControl(description, Validators.required),
            'ingredients': ingredientsArray
           
        })
    }

    onSubmit(){
        if(this.isEditMode){
            this.recipeService.updateNewRecipe(this.id, this.recipeForm.value);

        } else {
            this.recipeService.addNewRecipe(this.recipeForm.value);
        }

        this.onChancel();
    }

    onChancel() {
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    onAddIngridient() {
        (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
            'name': new FormControl(null, Validators.required),
            'amount': new FormControl(null, Validators.required),
        }))
    }

    onDeleteIngredients(index: number){
        (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);

    }

    get controls() { // a getter!
        return (<FormArray>this.recipeForm.get('ingredients')).controls;
      }

}
