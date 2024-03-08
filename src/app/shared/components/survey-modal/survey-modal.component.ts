import { Component, OnInit } from "@angular/core";
import { PageService } from "../../services/api/page.service";
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule } from "@angular/common";

declare var $: any;
@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'survey-modal',
    templateUrl: './survey-modal.component.html',
    styleUrls: ['./survey-modal.component.css']
})

export class SurveyModalComponent implements OnInit {

    activarEncuestaS: boolean = false;
    mostrarEncuesta: boolean = false;
    encuesta: any = [];
    escala: any = ['Para nada de acuerdo', 'En desacuerdo', 'Ni de acuerdo ni en desacuerdo', 'De acuerdo', 'Completamente de acuerdo'];
    imagenes_escala: any = ['ic_encuesta_1.svg', 'ic_encuesta_2.svg', 'ic_encuesta_3.svg', 'ic_encuesta_4.svg', 'ic_encuesta_5.svg'];
    respuestas: any = [];
    opciones_marcadas: any = [];
    agrupada: number = 1;
    showErrors: string = "";
    token: string = "";

    moveFlotante: string = "";
    suscribeListenRouter: Subscription;

    constructor(private pageService: PageService, private router: Router) {
        this.suscribeListenRouter = this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                var d = router.url.split("/");
                if (d[1] == 'proyecto') {
                    this.moveFlotante = "moveToLeft";
                } else {
                    this.moveFlotante = "";
                }
            }
        });
    }

    ngOnInit(): void {
        this.init();
    }

    async init() {
        await this.getEncuestaActiva(); //seccionado 1=si, 0=no 
    }

    async getEncuestaActiva() {
        this.encuesta = await this.pageService.getEncuestaActiva(this.agrupada);
        if (this.encuesta?.[0]?.id_encuesta) {
            this.mostrarEncuesta = true;
        }
    }

    activarEncuesta(cerrar?: any) {
        this.activarEncuestaS = !this.activarEncuestaS;
        this.avanzar('portada');

        this.token = "";
        this.opciones_marcadas = [];
        this.respuestas = [];
        $(".inp_modal").val(0);
        $(".radio_modal").prop('checked', false)
    }

    avanzar(paso: any) {
        $(".cnt_sec_modal").removeClass('active');
        $("." + paso).addClass('active');
    }

    async avanzarUnico() {
        if (this.opciones_marcadas.length == this.encuesta[0].preguntas.length) {

            const result = await this.pageService.setRespuestaEncuesta(this.opciones_marcadas, this.token);
            this.token = result[0]['token'];

            $(".cnt_sec_modal").removeClass('active');
            $(".final").addClass('active');

            setTimeout(() => {
                this.mostrarEncuesta = false;
                this.token = "";
            }, 1500)
        } else {
            this.showErrors = 'Debes marcar todas las preguntas';
            setTimeout(() => {
                this.showErrors = '';
            }, 3000)
        }

    }

    marcarPregunta(event: any) {
        let selectedIndex: number = event.target["selectedIndex"];
        let id_pregunta = event.target.options[selectedIndex].getAttribute("id_encuesta");

        let valor = event.target.value;

        if (valor != '' && valor != null && valor != undefined) {
            if (!this.respuestas.includes(id_pregunta)) {
                this.respuestas.push(id_pregunta);
                this.opciones_marcadas.push({ 'id_encuesta': this.encuesta[0].id_encuesta, 'id_pregunta': id_pregunta, 'valor': valor });
            } else {
                let pos = this.respuestas.indexOf(id_pregunta);
                this.respuestas.splice(pos, 1);
                this.opciones_marcadas.splice(pos, 1);

                this.respuestas.push(id_pregunta);
                this.opciones_marcadas.push({ 'id_encuesta': this.encuesta[0].id_encuesta, 'id_pregunta': id_pregunta, 'valor': valor });
            }
        } else {
            let pos = this.respuestas.indexOf(id_pregunta);
            this.respuestas.splice(pos, 1);
            this.opciones_marcadas.splice(pos, 1);
        }
    }

    marcarEscala(id_pregunta: any, valor: any) {
        if (!this.respuestas.includes(id_pregunta)) {
            this.respuestas.push(id_pregunta);
            this.opciones_marcadas.push({ 'id_encuesta': this.encuesta[0].id_encuesta, 'id_pregunta': id_pregunta, 'valor': valor });
        } else {
            let pos = this.respuestas.indexOf(id_pregunta);
            this.respuestas.splice(pos, 1);
            this.opciones_marcadas.splice(pos, 1);

            this.respuestas.push(id_pregunta);
            this.opciones_marcadas.push({ 'id_encuesta': this.encuesta[0].id_encuesta, 'id_pregunta': id_pregunta, 'valor': valor });
        }
    }

    marcarTextarea(event: any) {
        let id_pregunta = event.target.getAttribute("id_encuesta");
        let valor = event.target.value;

        if (valor != '' && valor != null && valor != undefined) {
            if (!this.respuestas.includes(id_pregunta)) {
                this.respuestas.push(id_pregunta);
                this.opciones_marcadas.push({ 'id_encuesta': this.encuesta[0].id_encuesta, 'id_pregunta': id_pregunta, 'valor': valor });
            } else {
                let pos = this.respuestas.indexOf(id_pregunta);
                this.respuestas.splice(pos, 1);
                this.opciones_marcadas.splice(pos, 1);

                this.respuestas.push(id_pregunta);
                this.opciones_marcadas.push({ 'id_encuesta': this.encuesta[0].id_encuesta, 'id_pregunta': id_pregunta, 'valor': valor });
            }
        } else {
            let pos = this.respuestas.indexOf(id_pregunta);
            this.respuestas.splice(pos, 1);
            this.opciones_marcadas.splice(pos, 1);
        }
    }

    async avanzarMultiple(paso: any, total_preguntas: any) {
        if (total_preguntas == this.opciones_marcadas.length) {
            const result = await this.pageService.setRespuestaEncuesta(this.opciones_marcadas, this.token);
            this.token = result[0]['token'];

            if (this.encuesta[0].secciones.length == paso) {
                $(".cnt_sec_modal").removeClass('active');
                $(".final").addClass('active');

                setTimeout(() => {
                    this.mostrarEncuesta = false;
                    this.token = "";
                }, 1500)
            } else {
                $(".cnt_sec_modal").removeClass('active');
                $(".paso" + paso).addClass('active');
            }

            this.respuestas = [];
            this.opciones_marcadas = [];

        } else {
            this.showErrors = 'Debes marcar todas las preguntas';
            setTimeout(() => {
                this.showErrors = '';
            }, 3000)
        }
    }
}