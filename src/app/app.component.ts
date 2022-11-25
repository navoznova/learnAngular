import { Component } from '@angular/core'; 
import { Recipe } from './recipes/recipe.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    // loadedfeature: string = 'recipe';

    // onNavigate(feature: string) {
    //     this.loadedfeature = feature;
    // }


    title = 'my-app';
}
