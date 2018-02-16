import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Gif } from "@app/models/gif.model";

@Injectable()
export class GifService {

  // apiUrl from NodeAPI (from webtask.io)
  apiUrl = 'https://wt-5114bedc6d23336dee7adc7cb5f01496-0.run.webtask.io/gif-battle';

  constructor(private http: HttpClient) { }

  /**
   * CREATE
   */
  // get a random gif
  getRandom(): Observable<Gif> {
    return this.http.get<Gif>(`${this.apiUrl}/random`);
  }

  // store a gif
  save(id: string, url: string, caption: string): Observable<any> {
    return this.http.post(this.apiUrl, {id, url, caption, votes: 0})
  }

  /**
   * BATTLE
   */
  // get a battle (2 gifs)
  getBattle(): Observable<Gif[]> {
    return this.http.get<Gif[]>(`${this.apiUrl}/versus`);
  }

  // vote on a gif
  vote(id): Observable<any> {
    return this.http.post(`${this.apiUrl}/vote`, { id }); // ES6 shorthand {id} === {id: id}
  }

  /**
   * LEADERBOARD
   */
  // get a leaderboard
  getLeaderboard(): Observable<Gif[]> {
    return this.http.get<Gif[]>(`${this.apiUrl}/leaderboard`);
  }

}
