import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  timerVPosition: 'top' | 'center' | 'bottom' = 'center';

  constructor() {}
}
