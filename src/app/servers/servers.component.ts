import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // selector: '#app-servers', ID angular не поддерживает!
  templateUrl: './servers.component.html',
  // template: `
  //   <p>The Servers Component inline</p>

  //   <app-server></app-server>
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  // styleUrls: ['./servers.component.css']
  styles: [`
    p {
      color: var(--red);
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test Server';
  serverCreates = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {  }

  onCreateServer() {
    this.serverCreates = true;
    this.serverCreationStatus = `Server was created! Name is: ${ this.serverName }`;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
