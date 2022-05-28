import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpinnerOverlayService } from './spinner-overlay.service';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  constructor(private _snackBar: MatSnackBar, private readonly spinnerOverlayService: SpinnerOverlayService) {  
  }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(httpRequest);
    const API_KEY = '123456';
    this.spinnerOverlayService.show();
    return next.handle(httpRequest.clone({ setHeaders: { API_KEY } })).pipe(
      catchError((error) => {
        console.log(error);
        if (error.status === 401 || error.status === 403 || error.status === 400) {
          this._snackBar.open(error.error, 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
          });
        } else {
          this._snackBar.open(error.statusText, 'Close', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
          });
        }
        return throwError(error);
      }),
      finalize(() => {
        setTimeout(() => {
          this.spinnerOverlayService.hide();
        }, 3000);
      })
    );
  }
}