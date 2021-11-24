import { Directive, ElementRef, HostBinding, HostListener, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: 'button[appHotCounter]'
})
export class HotCounterDirective implements OnInit, OnDestroy {

  private totalCount: number = 0;
  private destroy$ = new Subject<void>();

  @HostBinding('style.background-color')
  bgColor: string = '';

  constructor(private ref: ElementRef) { }

  // @HostListener('click')
  private addClick() {
    this.totalCount++;
    this.bgColor = this.calculateColor(this.totalCount);
  }

  ngOnInit() {
    fromEvent(this.ref.nativeElement, 'click')
      .pipe(takeUntil(this.destroy$))
      .subscribe($event => {
        console.log($event);
        this.totalCount++;
        this.addClick();
      })
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private calculateColor(totalClicks: number): string {
    if (totalClicks < 5) { return 'green'; }
    if (totalClicks < 10) { return 'yellow'; }
    return 'red';
  }

}
