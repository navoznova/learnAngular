import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    
    onCreateNewPosition(form: NgForm) {
        let name = form.value.name;
        let amount = form.value.amount;
        let newIngreientObj = new Ingredient(name, amount);
        this.shoppingListService.onAddNewIngredient(newIngreientObj);
    }

    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit(): void {
        
    }

}
