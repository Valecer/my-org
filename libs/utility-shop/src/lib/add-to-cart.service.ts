import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }
  
  addCart = (count: number) => {
    return count++;
  };
}
