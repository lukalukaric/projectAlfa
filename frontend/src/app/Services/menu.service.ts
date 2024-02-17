import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuDTO } from '../../../../backend/app/DTOs/MenuDTO';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private http: HttpClient) {
  }

  public getMenu(): Observable<MenuDTO> {
    return this.http.get<MenuDTO>("http://localhost:3000/menu/menu")
  }
}
