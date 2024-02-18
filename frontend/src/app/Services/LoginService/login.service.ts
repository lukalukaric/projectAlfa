import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageResponseDTO } from '../../../../../backend2/app/DTOs/Common/MessageResponseDTO';
import { LoginDTO} from '../../../../../backend2/app/DTOs/LoginDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    constructor(private http: HttpClient) {
    }
    
    public doLogin(data: LoginDTO): Observable<MessageResponseDTO> {
        return this.http.post<MessageResponseDTO>("http://localhost:3000/login/doLogin", data, {headers: this.headers});
    }
}
