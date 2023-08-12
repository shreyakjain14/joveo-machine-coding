import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DebouceService {
  genericDebounce(fn: Function, time: number) {
    let timerId: any;
    return (query: string) => {
      clearTimeout(timerId);
      timerId = setTimeout(fn, time, query);
    };
  }
}
