import { Directive, OnInit, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[addcomponent]',
    standalone: true
})

export class AddComponent implements OnInit {
    constructor(public viewContainerRef: ViewContainerRef) { 
        console.log("desde la directiva!!")
    }


    ngOnInit(): void {
        console.log("llamamos al oninit de manera custom ", this.viewContainerRef)
    }
}