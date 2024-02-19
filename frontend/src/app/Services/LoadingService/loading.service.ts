import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
    private isBusy = false

    constructor() { }

    public getBusy() {
        return this.isBusy;
    }

    public setBusy(state: boolean) {
        this.isBusy = state;
    }
}
