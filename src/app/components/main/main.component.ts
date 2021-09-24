import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input()
  username: string = "" ;
  @Input()
  userDetails: any = {} ;
  @Input()
  userRepositories:any[] = [] ;
  @Input()
  userRepoTags:any[] = [] ;

  @Output()
  resetEvent = new EventEmitter() ;

  constructor() { 
  }

  ngOnInit(): void {
  }

  reset() {
    return this.resetEvent.emit() ;
  }

}
