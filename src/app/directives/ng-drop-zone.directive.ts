import { Directive, EventEmitter, ElementRef, Input, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[appNgDropFile]'
})
export class NgDropZoneDirective {

  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

  constructor() { }


  @HostListener('dragover', ['$event'])
  public onDragEnter(event: any) {
    this.mouseSobre.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  public onDragOut(event: any) {
    this.mouseSobre.emit(false);
  }

}
