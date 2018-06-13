import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  @ViewChild('image') image: ElementRef;
  @ViewChild('texte') texte: ElementRef;
  @ViewChild('footer') footer: ElementRef;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        window.addEventListener('scroll', this.scroll, true);
        /*if (document.documentElement.clientHeight > 798) {
          this.renderer.setStyle(this.footer.nativeElement, 'display', 'block');
        }*/
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
    }
    
    scroll = (): void => {
      console.log(window.pageYOffset);
      this.renderer.setStyle(this.texte.nativeElement, 'height', (document.documentElement.clientHeight / 2) + 'px');
      this.renderer.setStyle(this.image.nativeElement, 'filter', 'brightness(' + (100 + (window.pageYOffset / 3)) + '%)');
      if (document.documentElement.clientHeight < 600) {
        this.renderer.setStyle(this.texte.nativeElement, 'opacity', (window.pageYOffset / 400));
      } else if (document.documentElement.clientHeight >= 600 && document.documentElement.clientHeight < 800) {
        this.renderer.setStyle(this.texte.nativeElement, 'opacity', (window.pageYOffset / 80));
      } /*else {
        this.renderer.setStyle(this.texte.nativeElement, 'opacity', (window.pageYOffset / 200));
      }
      */
    };

}
