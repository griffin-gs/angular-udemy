import { Component } from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  serverId : number = 10;
  serverStatus : string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus(): string {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
