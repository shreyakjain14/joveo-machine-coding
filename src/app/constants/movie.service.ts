import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  public getMovies(query: string, pageNo: number) {
    return this.http.get(
      'https://api.themoviedb.org/3/search/movie?api_key=263e31d1ad0c4defa8822787e614e716&language=en-US&query=' +
        query +
        '&page=' +
        pageNo +
        '&include_adult=true'
    );
  }
}
