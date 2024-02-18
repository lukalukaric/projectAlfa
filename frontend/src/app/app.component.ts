import { HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './Components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { DataSharingService } from './Services/DataSharingService/data-sharing.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MenuComponent, HttpClientModule, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    public isUserLogedIn = false;
    public title = 'frontend';
    private profileService = inject(DataSharingService);
    constructor(private dataSharingService: DataSharingService) {
       
    }

    public ngOnInit(): void {
        this.dataSharingService.LoggedInUserProfile.subscribe(profile => this.isUserLogedIn = profile);
    }
    
}
