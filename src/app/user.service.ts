import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    userUrl = 'https://my-json-server.typicode.com/adyasha1018/resume-builder/users';
    constructor(private http: HttpClient) {}

   /** GET USER */
   getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
   }

   /** POST USER  */
   addUser (user: User): any {
       return this.http.post<any>(this.userUrl, user)
       .pipe(catchError(this.errorHandler));
   }

   errorHandler(error: HttpErrorResponse) {
       return throwError(error);
   }

   /** UPDATE USER */
   updateUser (user: User): Observable<User> {
       return this.http.put<User>(this.userUrl, user);
   }
}
