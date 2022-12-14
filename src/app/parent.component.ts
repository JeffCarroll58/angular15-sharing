import {Component, ViewChild, AfterViewInit, OnInit, ChangeDetectorRef} from '@angular/core';
import { ChildComponent } from './child.component';
import {DataService} from './data.service';

@Component({
    selector: 'app-parent',
    template: `
    <div style="float: left;width: 50%;height: auto; background-color: green; border: solid; margin: 20px; padding: 10px">
      <h1>Parent</h1>
      <input [(ngModel)]="myProperty" class="input-group mb-2">
      <h2>{{myProperty}}</h2>
      <input #phone placeholder="phone number" class="input-group mb-2">
      <button (click)="callPhone(phone.value)">Call</button>
      <app-child (messageEvent3)="receiveMessage3($event)" [parentToChildMessage1]="parentMessage1"></app-child>
        2-Message from Child via ViewChild: {{ message2 }}
        <br>
        3-Message from Child via Output: {{message3}}
        <br>
        4-Sharing unrelated via Service: {{ message4 }}
    </div>
  `,
    styleUrls: ['./parent.component.css']
})


export class ParentComponent implements AfterViewInit, OnInit {

  
    myProperty = 'Using ngModel';
    parentMessage1 = 'Parent message 1!';
    @ViewChild(ChildComponent) child2;
    message2: string;
    message3: string;
    message4: string;

    // ChangeDetectorRef required to fix Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError
    constructor(private data: DataService,
                private cdRef: ChangeDetectorRef) { }

    receiveMessage3($event) {
        this.message3 = $event;
    }

    ngAfterViewInit() {
      console.log(this.child2);
      this.message2 = this.child2.message2;
      // required to fix Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError
      this.cdRef.detectChanges(); 

    }

    ngOnInit() {
        this.data.currentMessage4.subscribe(message => this.message4 = message);
    }

    callPhone(phone: string) {
      console.log(phone);
    }

}
