import {Component, Input} from '@angular/core';
import {PostModel} from './PostModel';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input()
  post: PostModel;

  constructor() {
  }
}
