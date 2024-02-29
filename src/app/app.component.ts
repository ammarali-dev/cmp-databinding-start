import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('heading') header: ElementRef;

  serverElements = [
    { type: 'server', name: 'Alpha', content: 'Alpha is running on LAN' },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    console.log('on server added');
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }
  ngAfterViewInit() {
    console.log('Appppppppp Element ngAfterViewChecked');
    console.log(this.header);
  }

  OnChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
