import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  private _text: string = ''

  @Input('appHighlight')
  get text() { return this._text; }
  set text(val: string) { this._text = val; this.highlight(val); }

  constructor(private ref: ElementRef<any>, private renderer: Renderer2) { }

  ngOnInit() {
  }

  private highlight(text: string): void {
    if (text) {
      const textContent = this.ref.nativeElement.textContent;
      if (textContent?.indexOf(text) >= 0) {
        const pre = textContent?.slice(0, textContent?.indexOf(text));
        const found = text;
        const post = textContent?.slice(pre.length + found.length);

        Array.from(this.ref.nativeElement.childNodes).forEach(c => this.renderer.removeChild(this.ref.nativeElement, c));
        this.renderer.appendChild(this.ref.nativeElement, this.renderer.createText(pre));
        const span = this.renderer.createElement('span');
        this.renderer.setStyle(span, 'background-color', 'yellow');
        this.renderer.appendChild(this.ref.nativeElement, span);
        this.renderer.appendChild(this.ref.nativeElement, this.renderer.createText(post));
      } else {
        Array.from(this.ref.nativeElement.childNodes).forEach(c => this.renderer.removeChild(this.ref.nativeElement, c));
        this.renderer.appendChild(this.ref.nativeElement, this.renderer.createText(textContent));
      }
    } else {
      // const textContent = this.ref.nativeElement.textContent;
      // console.log(textContent);
      // Array.from(this.ref.nativeElement.childNodes).forEach(c => this.renderer.removeChild(this.ref.nativeElement, c));
      // this.renderer.appendChild(this.ref.nativeElement, this.renderer.createText(textContent));
    }
  }

}
