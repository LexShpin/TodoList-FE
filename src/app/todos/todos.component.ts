import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from '../projects/project';
import { ProjectsComponent } from '../projects/projects.component';
import { Todo } from './todo';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent {

  public username: string;
  public todos: Todo[]
  public date: Date;

  ngOnInit(): void {
    this.date = new Date();
    this.username = JSON.stringify(localStorage.getItem('username')).replace(/['"]+/g, '');
    this.onLoadTodos();
    console.log(this.username);
    this.projects.onLoadUserProjects();
  }

  constructor(private todosService: TodosService, private router: Router, public projects: ProjectsComponent) {}

  public onLoadTodos(): void {
    this.todosService.loadUserTodos(this.username).subscribe(
      (response) => {
        this.todos = response;
      },
      (error) => {
        console.log(error.message);
      }
    )
  }

  public onAddTodo(addTodoForm: NgForm): void {

  }

}
