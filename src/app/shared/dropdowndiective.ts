// import { Directive, HostListener, HostBinding } from '@angular/core';

// @Directive({
//     selector: '[appDropdown]'
// })
// export class DropdownDirective {
//     @HostBinding('class.open') isOpen = false;

//     @HostListener('click') toggleOpen() {
//         this.isOpen = !this.isOpen;
//     }
// }

/************************************************************
*************************************************************/

//code to close dropdown by clicking anywhere rather than just on the arrow
import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
     
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}