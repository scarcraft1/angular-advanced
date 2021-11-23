import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'button[appHotCounter]'
})
export class HotCounterDirective {

  private totalCount: number = 0;

  @HostBinding('style.background-color')
  bgColor: string = '';

  constructor() { }

  @HostListener('click')
  private addClick() {
    this.totalCount++;
    this.bgColor = this.calculateColor(this.totalCount);
  }

  private calculateColor(totalClicks: number): string {
    if (totalClicks < 5) {return 'green';}
    if (totalClicks < 10) {return 'yellow';}
    return 'red';
  }

}
