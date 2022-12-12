import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user";


@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private apiServiceUrl = "http://localhost:8089/auth";

    constructor(private http: HttpClient) {}

    public login(user: User): Observable<User> {
        return this.http.post<User>(`${this.apiServiceUrl}/login`, user);
    }

    public register(user: User): Observable<User> {
        return this.http.post<User>(`${this.apiServiceUrl}/register`, user);
    }

    public logout(): Observable<void> {
        return this.http.get<void>(`${this.apiServiceUrl}/logout`);
    }
}