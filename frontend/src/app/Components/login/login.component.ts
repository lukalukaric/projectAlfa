import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../Services/LoginService/login.service';
import { LoginDTO } from '../../../../../backend2/app/DTOs/LoginDTO';
import { Router } from '@angular/router';
import { DataSharingService } from '../../Services/DataSharingService/data-sharing.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    providers: [DataSharingService],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
    public username: string = "";
    public password: string = "";

    constructor(private loginService: LoginService, private router: Router, private dataSharingService: DataSharingService) { }

    public async doLogin() {
        let data = new LoginDTO();
        data.username = this.username;
        data.password = this.password;

        let resp = await this.loginService.doLogin(data).toPromise();
        if (resp?.Success === true) {
            this.router.navigate(["/home"]);
            this.dataSharingService.setSharedData(true);
        }
    }
}
