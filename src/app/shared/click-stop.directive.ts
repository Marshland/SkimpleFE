import { Directive, Output, EventEmitter, Renderer2, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[click.stop]'
})
export class StopPropagationDirective implements OnInit, OnDestroy {
  // tslint:disable-next-line:no-output-rename
  @Output('click.stop')
  stopPropEvent = new EventEmitter();
  unsubscribe;

  constructor(private renderer: Renderer2, private element: ElementRef) {}

  ngOnInit() {
    this.unsubscribe = this.renderer.listen(this.element.nativeElement, 'click', event => {
      event.stopPropagation();
      this.stopPropEvent.emit(event);
    });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
