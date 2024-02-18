import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './Components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { DataSharingService } from './Services/DataSharingService/data-sharing.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MenuComponent, HttpClientModule, CommonModule],
    providers: [DataSharingService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    constructor(private dataSharingService: DataSharingService) { }
    ngOnInit(): void {
        this.dataSharingService.getSharedData().subscribe(data => {
            this.isUserLogedIn = data;
        });
    }
    public isUserLogedIn = false;

    public title = 'frontend';
}
