import { Component,  OnInit } from '@angular/core';



@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
 Like : number = 0;
  constructor() { }
  
  ngOnInit(): void {
  }
  
  onClkLike(){
    this.Like = this.Like + 1;
  }
}
