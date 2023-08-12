import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DebouceService } from './debouce.service';
import { MovieService } from './constants/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  movies: any = [];
  numberOfPages: number = 1;
  currentPageNo: number = 1;
  debouncedSearchMovie: Function = () => {};
  prevQuery: string = '';

  constructor(
    private http: HttpClient,
    private debouceService: DebouceService,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.debouncedSearchMovie = this.debouceService.genericDebounce(
      this.searchForMovies.bind(this),
      300
    );
  }

  searchForMovies(query: string, isFromGoToPage: boolean) {
    if (isFromGoToPage) this.currentPageNo = 1;
    this.prevQuery = query;
    this.movieService
      .getMovies(query, this.currentPageNo)
      .subscribe((response: any) => {
        this.movies = response.results;
        this.numberOfPages = response.total_pages;
      });
  }

  goToPage(pageNumber: number) {
    this.currentPageNo = pageNumber;
    this.searchForMovies(this.prevQuery, true);
  }
}
