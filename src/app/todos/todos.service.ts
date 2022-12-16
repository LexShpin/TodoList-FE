import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "./todo";

@Injectable({
    providedIn: 'root'
})

export class TodosService {
    
    private apiServiceUrl = 'http://localhost:8089/todos';

    constructor(private http: HttpClient) {}

    public loadUserTodos(username: string): Observable<Todo[]> {
        return this.http.get<Todo[]>(`${this.apiServiceUrl}/${username}`);
    }
    
}