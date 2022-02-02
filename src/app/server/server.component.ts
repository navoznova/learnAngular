import { Component } from "@angular/core";


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})
export class ServerComponent {
    serverId: number = 10;
    serverName = '';
    serverStatus: string = 'offline';
    isEmpty = false;

    getServerStatus(){
        return this.serverStatus;
    }

    addServerName (event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
        this.isEmpty = true;
    }

    addServerNameEvent (event: Event) {
        this.isEmpty = true;
    }

    deleteServerName(){
        this.serverName = '';
        this.isEmpty = false;
    }
}