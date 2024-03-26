import { Injectable, signal, WritableSignal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';


@Injectable({
  providedIn: 'root'
})
export class CsService {
  loadCEvent:WritableSignal<string[]> = signal([])
  $loadCEvent = toObservable(this.loadCEvent);
}
