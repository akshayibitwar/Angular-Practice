import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
baseUrl : string = `https://jsonplaceholder.typicode.com/posts`

  constructor(private _http : HttpClient) { }

  getAllposts() : Observable<any>{
       return this._http.get<any>(this.baseUrl)
        
  }
}
