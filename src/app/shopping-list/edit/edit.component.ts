import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
    @ViewChild('form') form!: NgForm;

    ingredientIndex!: number;
    editingMode: boolean = false;
    subscrotion!: Subscription;
    ingredientToEdit!: Ingredient;

    onCreateNewPosition(form: NgForm) {
        let name = form.value.name;
        let amount = form.value.amount;
        if (this.editingMode) {
            this.shoppingListService.updateIngredient(this.ingredientIndex, new Ingredient(name, amount));
        } else {
            let newIngreientObj = new Ingredient(name, amount);
            this.shoppingListService.onAddNewIngredient(newIngreientObj);
        }
    }

    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit(): void {
        this.subscrotion = this.shoppingListService.startedEditing.subscribe(
            (index: number) => {
                this.editingMode = true;
                this.ingredientIndex = index;
                this.ingredientToEdit = this.shoppingListService.getIngredientToEdit(index);
                this.form.setValue({
                    name: this.ingredientToEdit.name,
                    amount: this.ingredientToEdit.amount
                })
            }
        );
    }

    ngOnDestroy(): void {
        this.subscrotion.unsubscribe();
    }

}
