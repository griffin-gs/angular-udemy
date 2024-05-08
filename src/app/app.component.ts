import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ServerComponent} from "./component/server/server.component";
import {ServersComponent} from "./component/servers/servers.component";
import {SuccessAlertComponent} from "./component/success-alert/success-alert.component";
import {WarningAlertComponent} from "./component/warning-alert/warning-alert.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServerComponent, ServersComponent, SuccessAlertComponent, WarningAlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'udemy-course';
}
