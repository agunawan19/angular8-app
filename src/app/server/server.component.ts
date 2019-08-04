import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  offline = 'offline';
  online = 'online';
  offlineColor = 'red';
  onlineColor = 'green';
  serverId = 10;
  serverStatus = this.offline;

  @Input() serverName: string;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? this.online : this.offline;
  }

  getServerStatus(): string {
    return this.serverStatus;
  }

  getColor(): string {
    return this.serverStatus === this.online ? this.onlineColor : this.offlineColor;
  }
}
