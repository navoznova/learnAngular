import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { EditComponent } from "./edit/edit.component";
import { ShoppingListComponent } from "./shopping-list.component";

@NgModule({
    declarations:[
        ShoppingListComponent,
        EditComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
    ]
})
export class ShoppingListModule {}