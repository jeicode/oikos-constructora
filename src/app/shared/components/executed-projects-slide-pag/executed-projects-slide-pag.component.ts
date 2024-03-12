import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/api/project.service';
import { environment } from 'src/environments/environment.prod';
import { Project } from 'src/app/core/models/project.model';
import { ConfigService } from '../../services/functions/config.service';

declare const $: any;

@Component({
  selector: 'app-executed-projects-slide-pag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './executed-projects-slide-pag.component.html',
  styleUrls: ['./executed-projects-slide-pag.component.css']
})
export class ExecutedProjectsSlidePagComponent implements OnInit {

  ejecutados: Project[] = []
  configService = inject(ConfigService);

  IMG_URL = environment.imagenes_url;

  constructor(private projService: ProjectService) { }

  ngOnInit(): void {
    this.getEjecutados()
  }


  async getEjecutados() {
    this.ejecutados = await this.projService.getProyectosByTipo('4', 'NA', 'NA', 'NA', '', '', 'descripcion_precio DESC');
    this.initSlide()
  }


  initSlide() {
    if (this.configService.isBrowser()) {
      if ($(window).width() >= 960) {
        $(function () {
          /* initiciate jPages */
          const pages = $("div.holder").jPages({
            previous: '← Anterior',
            next: 'Siguiente →',
            perPage: 7,
            startRange: 0,
            midRange: 0,
            endRange: 0,
            containerID: "itemContainer",
            animation: "bounceInUp"
          }).pages
  
          if (pages && pages.hasOwnProperty('showing')) {
            pages['showing'] = false
          }
          /* on select change */
          $("select").change(function () {
  
            var newAnimation = $($("select")).val();
            /* destroy jPages and initiate plugin again */
            $("div.holder").jPages("destroy").jPages({
              containerID: "itemContainer",
              animation: newAnimation
            });
          });
        });
      }
      else if ($(window).width() >= 480) {
        $(function () {
          /* initiciate jPages */
          $("div.holder").jPages({
            previous: '← Anterior',
            next: 'Siguiente →',
            perPage: 4,
            startRange: 0,
            midRange: 0,
            endRange: 0,
            containerID: "itemContainer",
            animation: "bounceInUp"
          });
          /* on select change */
          $("select").change(function () {
            /* get new css animation */
            var newAnimation = $("select").val();
            /* destroy jPages and initiate plugin again */
            $("div.holder").jPages("destroy").jPages({
              containerID: "itemContainer",
              animation: newAnimation
            });
          });
        });
      }
      else {
        $(function () {
          /* initiciate jPages */
          $("div.holder").jPages({
            previous: '← Anterior',
            next: 'Siguiente →',
            perPage: 3,
            startRange: 0,
            midRange: 0,
            endRange: 0,
            containerID: "itemContainer",
            animation: "bounceInUp"
          });
          /* on select change */
          $("select").change(function () {
            /* get new css animation */
            var newAnimation = $("select").val();
            /* destroy jPages and initiate plugin again */
            $("div.holder").jPages("destroy").jPages({
              containerID: "itemContainer",
              animation: newAnimation
            });
          });
        });
      }
    }
  }

}
