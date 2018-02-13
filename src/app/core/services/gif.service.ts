import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Gif } from '../gif';

@Injectable()
export class GifService {

  // apiUrl from NodeAPI (from webtask.io)
  apiUrl = 'https://wt-5114bedc6d23336dee7adc7cb5f01496-0.run.webtask.io/gif-battle';

  constructor(private http: HttpClient) { }

  /**
   * CREATE
   */
  // get a random gif
  // getRandom(): Observable<Gif>
  getRandom(): Observable<any> {
    return this.http.get(`${this.apiUrl}/random`);
  }

  // store a gif
  save(id: string, url: string, caption: string, votes: number): Observable<any> {
    return this.http.post(this.apiUrl, {id, url, caption, votes})
  }

  /**
   * BATTLE
   */
  // get a battle (2 gifs)
  getBattle() {

  }

  // vote on a gif
  vote(id) {

  }

  /**
   * LEADERBOARD
   */
  // get a leaderboard
  getLeaderboard() {

  }

}
