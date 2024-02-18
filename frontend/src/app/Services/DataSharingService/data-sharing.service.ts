import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

    constructor() { }

    private sharedDataSubject = new BehaviorSubject<any>(null);
    sharedData$ = this.sharedDataSubject.asObservable();

    setSharedData(data: any): void {
        this.sharedDataSubject.next(data);
    }

    getSharedData(): Observable<any> {
        return this.sharedData$;
    }
}
