import { Component } from "@angular/core";

declare var $:any;
@Component({

    selector: 'survey-modal',
    templateUrl: './survey-modal.component.html',
    styleUrls: ['./survey-modal.component.css']
})

export class surveyModalComponent {
    
    activarEncuestaS             : boolean = false;

    constructor(){}

    activarEncuesta(){
        this.activarEncuestaS = !this.activarEncuestaS;
        this.avanzar('portada');
    }

    avanzar(paso: any){
        $(".cnt_sec_modal").removeClass('active');
        $("."+paso).addClass('active');
    }
}