import { Component } from "@angular/core";


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})
export class ServerComponent {
    serverId: number = 10;
    serverName = '';
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    addServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    isEmpty() {
        return this.serverName;
    }

    deleteServerName() {
        this.serverName = '';
    }
}