import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

    private messageSource4 = new BehaviorSubject('Default message from Service 4!');
    currentMessage4 = this.messageSource4.asObservable();

    constructor() { }

    changeMessage(message4: string) {
        this.messageSource4.next(message4);
    }

}
