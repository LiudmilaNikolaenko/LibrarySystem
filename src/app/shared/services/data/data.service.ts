import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private bookSearchExp: string = '';

  private maxBookId: number = 0;
  
  constructor() { }

  public getBookSearchExp(): string {
    return this.bookSearchExp;
  }

  public setBookSearchExp(newBookSearchExp: string) {
    this.bookSearchExp = newBookSearchExp;
  }

  public getMaxBookId(): number {
    return this.maxBookId;
  }

  public setMaxBookId(newMaxBookId: number) {
    this.maxBookId = newMaxBookId;
  }
  
}

