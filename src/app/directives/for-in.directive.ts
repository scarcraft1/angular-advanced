import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFor][appForIn]'
})
export class ForInDirective {

  @Input('appForIn')
  public set obj(val: any) {
    this.createView(val);
  }

  constructor(private ref: TemplateRef<any>, private vcr: ViewContainerRef) {

  }

  private createView(val: any) {
    if (val && typeof val === 'object') {
      for (const key in val) {
        console.log('val, key', val, key);
        this.vcr.createEmbeddedView(this.ref, {
          $implicit: { key, value: val[key] },
          appForIn: val[key]
        });
      }
    }
  }

}
