import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe ('Test name1', 'Test description1', 'https://www.tourprom.ru/site_media/images/upload/2018/10/7/newsphoto/pinchos.jpg'),
    new Recipe ('Test name2', 'Test description2', 'https://www.tourprom.ru/site_media/images/upload/2018/10/7/newsphoto/pinchos.jpg'),
    new Recipe ('Test name3', 'Test description3', 'https://www.tourprom.ru/site_media/images/upload/2018/10/7/newsphoto/pinchos.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
