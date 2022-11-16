import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.module';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    @ViewChild('nameInputRef') nameInput: ElementRef | undefined;
    @ViewChild('amountInputRef') amountInput: ElementRef | undefined;

    @Output() newPositionToBuy = new EventEmitter<Ingredient>();
    
    onCreateNewPosition() {
        this.newPositionToBuy.emit(new Ingredient (this.nameInput?.nativeElement.value, this.amountInput?.nativeElement.value));

    }

    constructor() { }

    ngOnInit(): void {
    }

}
