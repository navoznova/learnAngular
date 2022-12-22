import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { DropDownDirective } from '../shared/drop-down.directive';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeEditComponent,
    DropDownDirective,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RecipeRoutingModule
  ],
  exports: [DropDownDirective]
})
export class RecipeModule { }
