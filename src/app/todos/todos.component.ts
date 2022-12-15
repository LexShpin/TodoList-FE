import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  ngOnInit(): void {
    this.username = JSON.stringify(localStorage.getItem('username')).replace(/['"]+/g, '');
    this.onLoadTodos();
    console.log(this.username);
  }

  constructor(private todosService: TodosService, private router: Router) {}

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

}
