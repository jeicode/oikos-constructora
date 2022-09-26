import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';


@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  isMobile: boolean = false;
  
  constructor(private breakpointObserver: BreakpointObserver) {
    this.observeBreakpoints()
  }

  observeBreakpoints(){

    this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .subscribe((state: BreakpointState) => {

        if (state.breakpoints['(min-width: 768px)']){
          this.isMobile = false
        } else {
          this.isMobile = true
        }
      })

  }
  
}
