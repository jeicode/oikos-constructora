import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { Project } from 'src/app/core/models/project.model';
import { environment } from 'src/environments/environment';
import { ThousandNumber } from '../../pipes/thousand-number.pipe';
import { CurrencyConverterService } from '../../services/api/currency-converter.service';
import { ModalPreLaunchProjectComponent } from '../modal-pre-launch-project/modal-pre-launch-project.component';
import { WppModalProjectComponent } from '../wpp-modal-project/wpp-modal-project.component';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports:[
    CommonModule, 
    RouterModule,
    WppModalProjectComponent,
    ModalPreLaunchProjectComponent,
    ThousandNumber
  ],
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit {


  @Input() projects:Project[] = []
  BASE_URL:string = environment.imagenes_url

  projectSelectedToModal:Project = new Project()
  notifyModalChanges: Subject<any> = new Subject<any>();
  notifyChangesPreLaunchProject: Subject<any> = new Subject<any>();


  constructor(private currencyConverter:CurrencyConverterService) { }

  ngOnInit(): void {
    this.currencyConverter.convertCopToUsdProjects(this.projects)
  }


  /**
   * 
   * @param project selected project to modal
   */
  selectProjectToModal(project:Project){
    this.projectSelectedToModal = project
    this.notifyModalChanges.next({openModal:true});
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
