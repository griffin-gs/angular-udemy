import {Component, OnInit} from '@angular/core';
import {ServerComponent} from "../server/server.component";
import {FormsModule} from "@angular/forms";
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [
    ServerComponent,
    FormsModule,
    NgIf,
    NgForOf,
    NgStyle,
    NgClass
  ],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus : string = 'No server was created!';
  serverName = 'Test server';
  username = 'Example';
  serverCreated = false;
  servers = ['Test server', 'Test server 2']
  displayParagraph: boolean = false;
  clickCounter : number = 0;
  displayClicks : number[] = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  };

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event): void {
    // This casts the event to an HTML Input Element type
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUsername(): void {
    this.username = '';
  }

  onDisplayParagraph() : void {
    this.clickCounter++;
    this.displayClicks.push(this.clickCounter);
    this.displayParagraph = !this.displayParagraph;
  }

  getColor(click: number): string {
    if (click >= 5) {
      return 'blue';
    }
    return 'transparent';
  }
}
