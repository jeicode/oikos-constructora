import { NgOptimizedImage, NgStyle } from '@angular/common';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { Project } from 'src/app/core/models/project.model';
import { ModalPreLaunchProjectComponent } from 'src/app/shared/components/modal-pre-launch-project/modal-pre-launch-project.component';
import { WppModalProjectComponent } from 'src/app/shared/components/wpp-modal-project/wpp-modal-project.component';
import { ThousandNumber } from 'src/app/shared/pipes/thousand-number.pipe';
import { CurrencyConverterService } from 'src/app/shared/services/api/currency-converter.service';
import { ProjectService } from 'src/app/shared/services/api/project.service';

const CommonModules = [NgStyle]
@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [
    ...CommonModules,
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

  housingProjects:WritableSignal<Project[]> = signal([])
  projectService = inject(ProjectService);
  currencyConverter = inject(CurrencyConverterService)

  projectSelectedToModal:Project = new Project()

  notifyChanges: Subject<any> = new Subject<any>();
  notifyChangesPreLaunchProject: Subject<any> = new Subject<any>();

  ngOnInit(): void {
    console.log('%csrc/app/modules/home/components/projects-list/projects-list.component.ts:39 "object"', 'color: #007acc;', "object");
    this.getProjectsHome()
  }

  async getProjectsHome(){
    const data = await this.projectService.getProyectosByTipo('1', undefined, undefined, undefined, undefined, 'home');
    this.housingProjects.set(data)
    await this.currencyConverter.convertCopToUsdProjects(this.housingProjects())
  }
  /**
   * 
   * @param project selected project to modal
   */
  selectProjectToModal(project:Project){
    project.origin = 'home';
    this.projectSelectedToModal = project
    this.notifyChanges.next({openModal:true});
  }


  /**
   * 
   * @param project project selected to prelaunch modal form
   */
  selectProjectToPreLaunch(project:Project){
    this.projectSelectedToModal = project
    this.notifyChangesPreLaunchProject.next({openModal:true});
  }

}
