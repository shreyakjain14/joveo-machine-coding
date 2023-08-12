import { Component, Input } from '@angular/core';
import { IMG_URL } from '../constants/constants';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  @Input() movie: any = {};
  public IMG_URL: string = IMG_URL;
}
