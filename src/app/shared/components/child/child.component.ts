import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, } from '@angular/core';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  PostsArray !: Array<any>;
  constructor(private _postsService : PostsService,
              private _detectChanges : ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  //   this._postsService.getAllposts()
  //             .subscribe((res : any)=>{
  //               this.PostsArray = res;
  //               console.log(res);
  //             this._detectChanges.detectChanges()
  //             })
  }

  detectChangesInParentTree(){
      console.log(`Changes are Done in Parent Tree`);
      
  }

}
