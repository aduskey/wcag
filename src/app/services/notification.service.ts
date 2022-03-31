import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Error } from '../models/error.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public error: BehaviorSubject<Error> = new BehaviorSubject<Error>(null);
  public notification: BehaviorSubject<{
    message: string;
    confirm: string;
    duration: number;
  }> = new BehaviorSubject<{
    message: string;
    confirm: string;
    duration: number;
  }>(null);

  getError() {
    return this.error.value;
  }

  setError(error: Error) {
    this.error.next(error);
  }

  setSnackbar(message: string, confirm: string, duration: number) {
    this.notification.next({
      message: message,
      confirm: confirm,
      duration: duration,
    });
  }
}
