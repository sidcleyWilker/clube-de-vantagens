import { Directive, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHideHeader]',
  host: {
    '(ionScroll)':'onContentScroll($event)'
  }
})
export class HideHeaderDirective {
  @Input('header') header : any

  constructor(
    private renderer: Renderer2
    )
   {
  
    }
   
   ngOnInit(){
    this.header = this.header.el;
    this.renderer.setStyle(this.header, 'transition', 'margin-top 400ms')

   }
   onContentScroll(event: any){
    if(event.detail.scrollTop > 2){
      this.renderer.setStyle(this.header, 'margin-top', `-${this.header.clientHeight}px`)
    }else {
      this.renderer.setStyle(this.header, 'margin-top', '0')
    }
   }

}
