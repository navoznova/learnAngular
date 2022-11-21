import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    @ViewChild('nameInputRef') nameInput: ElementRef | undefined;
    @ViewChild('amountInputRef') amountInput: ElementRef | undefined;
    
    onCreateNewPosition() {
        let name = this.nameInput?.nativeElement.value;
        let amount = this.amountInput?.nativeElement.value;
        let newIngreientObj = new Ingredient(name, amount);
        this.shoppingListService.onAddNewIngredient(newIngreientObj);
    }

    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit(): void {
        
    }

}
