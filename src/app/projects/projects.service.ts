import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Project } from "./project";

@Injectable({
    providedIn: 'root'
})

export class ProjectsService {

    private apiServiceUrl = 'http://localhost:8089/projects';

    constructor(private http: HttpClient) {}

    public loadUserProjects(username: string): Observable<Project[]> {
        return this.http.get<Project[]>(`${this.apiServiceUrl}/${username}`);
    }
}