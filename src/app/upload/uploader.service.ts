import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpRequest, HttpErrorResponse } from '@angular/common/http';

import { of } from 'rxjs';
import { catchError, last, map, tap } from 'rxjs/operators';


@Injectable()
export class UploaderService {
  constructor(
    private http: HttpClient) {}


  upload(file: File) {
    if (!file) { return; }
    const req = new HttpRequest('POST', '/upload/file', file, {
      reportProgress: true
    });
    return this.http.request(req).pipe(
      map(event => this.getEventMessage(event, file)),
      catchError(this.handleError(file))
    );
  }

  /** Return distinct message for sent, upload progress, & response events */
  private getEventMessage(event: HttpEvent<any>, file: File) {
    switch (event.type) {

      case HttpEventType.Response:
        return `File "${file.name}" was completely uploaded!`;

      default:
        return `File "${file.name}" surprising upload event: ${event.type}.`;
    }
  }
  private handleError(file: File) {
    const userMessage = `${file.name} upload failed.`;

    return (error: HttpErrorResponse) => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      console.error(userMessage);
      const message = (error.error instanceof Error) ?
        error.error.message :
       `server returned code ${error.status} with body "${error.error}"`;
      // Let app keep running but indicate failure.
      return of(userMessage);
    };
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
