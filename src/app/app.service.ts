import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { UserBlog } from './app.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {
  }

  getUserBlogs(username: String): Observable<UserBlog> {
    username = username.replace(/^\@?/, '@');

    const rss2jsonUrl = 'https://api.rss2json.com/v1/api.json?rss_url=';
    const userUrl = 'https://medium.com/feed/' + username;

    return this.http.get<UserBlog>(rss2jsonUrl + userUrl)
      .pipe(
        map(response => {
          return {
            feed: response.feed,
            items: response.items.map(item => {
              item.link = item.link.split('?')[0];
              return { ...item };
            }),
            status: response.status,
          };
        }),
        catchError((error) => this.handleError(error, userUrl))
      );
  }

  private handleError(error: HttpErrorResponse, userUrl: String) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.message}\n\n` +
        `Check the username provided is valid.\nRSS URL: ${userUrl}`);
    }
    // return an observable with a user-facing error message
    return throwError(`Something bad happened; please try again later.`);
  }
}
