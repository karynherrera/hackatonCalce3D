import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InicioComponent {
    constructor(private http: HttpClient) { }
    url = 'http:localhost:4000';
    getPacientes() {
        return this
           .http
           .get(`${this.url}/pacientes`);
    }
}
