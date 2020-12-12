import { Directive, ElementRef,HostBinding,Renderer2  } from '@angular/core';
import { NbThemeService } from "@nebular/theme";

@Directive({
  selector: '[ngxStylingThemes]'
})
export class StylingThemesDirective {
  currentTheme:string;
  backgroundColour ='rgba(226, 229, 222, 0.9)';
  constructor(
    private themeService: NbThemeService,
    private el: ElementRef,
    private renderer: Renderer2) {

      this.currentTheme=this.themeService.currentTheme

      if (this.currentTheme=='dark'){
        this.backgroundColour ='#151a30'
        el.nativeElement.style.backgroundColor = this.backgroundColour;

      }

      this.themeService.onThemeChange()
            .subscribe((theme: any) => {
              this.currentTheme=theme.name;
              if (this.currentTheme=='dark'){
                this.backgroundColour ='#151a30'
                el.nativeElement.style.color = 'white';

              }
              else{
                this.backgroundColour ='rgba(226, 229, 222, 0.9)'
                el.nativeElement.style.color = 'black';
              }
              this.el.nativeElement.style.backgroundColor = this.backgroundColour;

            });


    }

}
