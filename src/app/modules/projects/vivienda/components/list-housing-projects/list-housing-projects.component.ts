import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Project } from 'src/app/core/models/project.model';
import { ProjectService } from 'src/app/shared/services/api/project.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-housing-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-housing-projects.component.html',
  styleUrls: ['./list-housing-projects.component.css']
})
export class ListHousingProjectsComponent implements OnInit {

  projects:Project[] = [];
  BASE_URL = environment.base_url;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }


  async getProyects(){
    const projects = await this.projectService.getProyectosByTipo('1');
    if (projects?.length > 0){
      this.projects = projects
    }
  }


}
