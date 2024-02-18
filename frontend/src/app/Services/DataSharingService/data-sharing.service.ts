import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
    
    private LoggedInUserSource = new BehaviorSubject<any>(null);
    LoggedInUserProfile = this.LoggedInUserSource.asObservable();

    constructor() { }

    changeProfile(profile: any) {
        this.LoggedInUserSource.next(profile);
    }
}
