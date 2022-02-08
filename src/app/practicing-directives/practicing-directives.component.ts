import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-directives',
  templateUrl: './practicing-directives.component.html',
  styleUrls: ['./practicing-directives.component.css']
})
export class PracticingDirectivesComponent implements OnInit {
  display = false;
  clickNumbers: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  displayPassword() {
    // let lastClickIndex = this.clickNumbers.length+1;
    // this.clickNumbers.push(lastClickIndex);
    this.clickNumbers.push(new Date());
    this.display = !this.display;
  }
}
