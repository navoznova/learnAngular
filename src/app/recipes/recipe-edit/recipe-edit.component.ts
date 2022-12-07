import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

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

        if(this.isEditMode){
            let currentRecipe = this.recipeService.getRecipeByIndex(this.id);
            name = currentRecipe.name;
            path = currentRecipe.imagePath;
            description = currentRecipe.description
        }

        this.recipeForm = new FormGroup ({
            'name': new FormControl(name),
            'path': new FormControl(path),
            'discription': new FormControl(description)
        })
    }

    onSubmit(){
        console.log(this.recipeForm)
    }

}
