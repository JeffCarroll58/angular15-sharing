import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
      <div style="width:90%; background-color: burlywood; border: solid; margin: 20px; padding: 10px">
          <h2>Child</h2>
          1-Parent to Child via Input: {{ parentToChildMessage1 }}
          <br>
          <button (click)="sendMessage3()">Send Message 3</button>
      </div>
  `,
    styleUrls: ['./child.component.css']
})
export class ChildComponent {

    @Input() parentToChildMessage1: string;

    message3 = 'Child message 3!';

    @Output() messageEvent3 = new EventEmitter<string>();

    message2 = 'Child message 2!';


    constructor() {}



    sendMessage3() {
      console.log('sendMessage');
      this.messageEvent3.emit(this.message3);
    }

}
