import { Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { animationFrameScheduler, interval, Subject } from 'rxjs';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  private interval$ = interval(1000, animationFrameScheduler);

  constructor(private ref: TemplateRef<any>, private vcr: ViewContainerRef) { }

  ngOnInit() {
    this.interval$.subscribe(i => {
      if (i % 2) {
        this.vcr.createEmbeddedView(this.ref);
      } else {
        this.vcr.clear();
      }
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
