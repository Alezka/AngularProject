import {Component} from '@angular/core';
import {PostService} from './services/post.service';
import {ComentModel} from './coment/ComentModel';
import {PostModel} from './post/PostModel';

@Component({
  selector: 'app-root',
  template: `<h1>hello {{msg}}!</h1>
  <app-post *ngFor="let u of posts" [post]="u"></app-post>
  <h1> hello {{coment}}!!!</h1>
  <app-coment *ngFor="let u of coments" [coment]="u"></app-coment>
  `,
  styles: [`h1 {
    background: silver
  }`]
})
export class AppComponent {
  msg = 'posts';
  posts: PostModel[];
  coment = 'coment';
  coments: ComentModel[];
  constructor(private postService: PostService, private comentService) {
    this.postService.getPosts().subscribe(value => this.posts = value);
    this.comentService.getComents().subscribe(value => this.coments = value);
  }
}
