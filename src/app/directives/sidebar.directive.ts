import { ChangeDetectorRef, ComponentFactoryResolver, Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { FilterService } from "@app/services";
import { Subject } from "rxjs";

@Directive({
  selector: '[appSidebar]'
})
export class SidebarDirective implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(
    private service: FilterService,
    private cdr: ChangeDetectorRef,
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver) {}

  ngOnInit() {
    console.log('hola');
    this.service.getSidebarAsync().subscribe(filter => {
      console.log('getSidebarAsync', filter);
      const factory = this.cfr.resolveComponentFactory(filter);
      this.vcr.clear();
      this.vcr.createComponent(factory)
      this.cdr.detectChanges();
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
