import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuDTO } from '../../../../../backend/app/DTOs/MenuDTO';
import { MenuService } from '../../Services/MenuService/menu.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  public menu: MenuDTO | undefined = undefined;
  constructor(private menuService: MenuService, private router: Router) {

  }

  ngOnInit(): void {
    this.getData();
  }

  public async getData() {
    this.menu = await this.menuService.getMenu().toPromise();
  }

  public navigate(url: string | undefined) {
    if (url !== undefined)
      this.router.navigate([url]);
  }

}
