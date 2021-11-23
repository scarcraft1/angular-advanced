import { AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit, Renderer2, TemplateRef, ViewChild } from "@angular/core";

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styles: [ ':host { display: flex; flex-direction: column; }'],
  host: {
    style: 'display: flex;'
  }
})
export class DatepickerComponent implements OnInit, AfterViewInit {
  @Input() templateRef?: TemplateRef<any>;
  @ViewChild('placeHolder') placeholder?: ElementRef<HTMLElement>;

  @HostBinding('class.green') green = true;

  constructor(private el: ElementRef<any>, private renderer: Renderer2) {
    el.nativeElement.classList.add('red');
  }
  ngOnInit() {
    const div = this.renderer.createElement('div');
    this.renderer.appendChild(div, this.renderer.createText('hola'));
    this.renderer.appendChild(this.el.nativeElement, div);
  }

  ngAfterViewInit() {
    this.placeholder?.nativeElement.setAttribute('style', 'background-color: red;');
  }
}
