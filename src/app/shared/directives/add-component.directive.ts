import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[addcomponent]',
    standalone: true
})

export class AddComponent {
    constructor(public viewContainerRef: ViewContainerRef) { 
    }

}