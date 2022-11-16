import { Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirective {

    @HostBinding('class.open') private isOpen: boolean = false;
    @HostListener('click') onClick() {
        this.isOpen = !this.isOpen;
    }

}

