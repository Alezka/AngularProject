import {Component, Input} from '@angular/core';
import {ComentModel} from './ComentModel';



@Component({
  selector: 'app-coment',
  templateUrl: './coment.component.html',
  styleUrls: ['./coment.component.css']
})
export class ComentComponent {
  @Input()
  coment: ComentModel;

  constructor() {
  }

}
