import { Component, Injectable } from '@angular/core';
import { Project } from './project';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})

@Injectable({
  providedIn: 'root'
})

export class ProjectsComponent {

  public projects: Project[];
  public username = JSON.stringify(localStorage.getItem('username')).replace(/['"]+/g, '');

  constructor(private projectsService: ProjectsService) {}

  public onLoadUserProjects() {
    this.projectsService.loadUserProjects(this.username).subscribe(
      (response) => {
        this.projects = response;
        console.log(this.projects);
      },
      (error) => {
        console.log(error.message);
      }
    )
  }
}
