import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  query: string = '';

  searchMovieForm: FormGroup = new FormGroup<any>({
    query: new FormControl('', [Validators.required]),
  });

  @Output() emitQuery = new EventEmitter<string>();

  searchMovie() {
    const query = this.searchMovieForm.value.query;
    console.log('query: ', query);
    this.emitQuery.emit(query);
  }

  changeQuery(event: any) {
    const query = event.target.value;
    this.emitQuery.emit(query);
  }
}
