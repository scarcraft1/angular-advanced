import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  private tooltipElement: HTMLElement;

  @Input('appTooltip')
  set tooltip(value: string) {
    if (this.tooltipElement) {
      Array.from(this.tooltipElement.childNodes)
        .forEach(c => this.renderer.removeChild(this.tooltipElement, c));
      this.renderer.appendChild(this.tooltipElement, this.renderer.createText(value));
    }
  }

  constructor(private ref: ElementRef<any>, private renderer: Renderer2) {
    this.tooltipElement = this.renderer.createElement('div');
    this.setTooltipStyle();
    this.renderer.setStyle(this.ref.nativeElement, 'position', 'relative');
  }

  @HostListener('mouseenter')
  private onMouseEnter(): void {
    this.renderer.appendChild(this.ref.nativeElement, this.tooltipElement);
  }

  @HostListener('mouseleave')
  private onMouseLeave(): void {
    this.renderer.removeChild(this.ref.nativeElement, this.tooltipElement);
  }

  private setTooltipStyle() {
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'top', '100%');
    this.renderer.setStyle(this.tooltipElement, 'margin-top', '1em');
    this.renderer.setStyle(this.tooltipElement, 'padding', '2em');
    this.renderer.setStyle(this.tooltipElement, 'font-size', 'small');
    this.renderer.setStyle(this.tooltipElement, 'color', 'white');
    this.renderer.setStyle(this.tooltipElement, 'background-color', 'rgba(0,0,0,.75)');
    this.renderer.setStyle(this.tooltipElement, 'border-radius', '5px');
    this.renderer.setStyle(this.tooltipElement, 'text-align', 'center');
  }

}
