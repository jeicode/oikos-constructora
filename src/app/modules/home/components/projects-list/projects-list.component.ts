import { NgOptimizedImage, NgStyle } from '@angular/common';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { Project } from 'src/app/core/models/project.model';
import { ModalPreLaunchProjectComponent } from 'src/app/shared/components/modal-pre-launch-project/modal-pre-launch-project.component';
import { WppModalProjectComponent } from 'src/app/shared/components/wpp-modal-project/wpp-modal-project.component';
import { ThousandNumber } from 'src/app/shared/pipes/thousand-number.pipe';
import { CurrencyConverterService } from 'src/app/shared/services/api/currency-converter.service';
import { getProyectosByTipo } from 'src/app/shared/services/apis/project.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [
    NgStyle,
    RouterLink,
    NgOptimizedImage,
    ThousandNumber,
    ModalPreLaunchProjectComponent,
    WppModalProjectComponent
  ],
  templateUrl: './projects-list.component.html',
  styleUrl: '../../home-page.component.css'
})
export class ProjectsListComponent implements OnInit {

  getProyectosByTipo = getProyectosByTipo()

  IMG_URL = signal(environment.imagenes_url)
  currencyConverter = inject(CurrencyConverterService)

  housingProjects: WritableSignal<Project[]> = signal([])
  projectSelectedToModal: Project = new Project;

  notifyChanges: Subject<any> = new Subject<any>();
  notifyChangesPreLaunchProject: Subject<any> = new Subject<any>();

  ngOnInit(): void {
    this.getProjectsHome()
  }

  async getProjectsHome() {
    const data = await this.getProyectosByTipo('1', undefined, undefined, undefined, undefined, 'home');
    this.housingProjects.set(data)
    this.currencyConverter.convertCopToUsd(this.housingProjects())
  }
  /**
   * 
   * @param project selected project to modal
   */
  selectProjectToModal(project: Project) {
    project.origin = 'home';
    this.projectSelectedToModal = project
    this.notifyChanges.next({ openModal: true });
  }


  /**
   * 
   * @param project project selected to prelaunch modal form
   */
  selectProjectToPreLaunch(project: Project) {
    this.projectSelectedToModal = project
    this.notifyChangesPreLaunchProject.next({ openModal: true });
  }

}
