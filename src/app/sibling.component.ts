import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'app-sibling',
    template: `
        <div style="float: left;width:40%; height: auto; background-color: teal; border: solid; margin: 20px; padding: 10px">
            <h2>Sibling</h2>
            4-Sharing unrelated via Service: {{ message4 }}
            <br>
            <button (click)="newMessage()">New Message 4</button>
    </div>
  `,
    styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

    message4: string;

    constructor(private data: DataService) { }

    ngOnInit() {
        this.data.currentMessage4.subscribe(message => this.message4 = message)
    }

    newMessage() {
        this.data.changeMessage("New message from Sibling 4!")
    }

}
