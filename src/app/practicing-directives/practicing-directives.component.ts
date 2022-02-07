import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-directives',
  templateUrl: './practicing-directives.component.html',
  styleUrls: ['./practicing-directives.component.css']
})
export class PracticingDirectivesComponent implements OnInit {
  display = false;
  clickNumbers: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  displayPassword() {
    let lastClickIndex = this.clickNumbers.length+1;
    this.clickNumbers.push(lastClickIndex);

    if (this.display === true) {
      this.display = false;
    } else {
      this.display = true;
    }
  }
}
