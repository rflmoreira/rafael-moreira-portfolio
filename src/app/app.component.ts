import { Component, OnInit, AfterViewInit, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { FormationComponent } from './formation/formation.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    FormationComponent,
    CertificationsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  showBackToTop = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.reveal();
    }, 100);
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (window.pageYOffset > 300) {
      this.showBackToTop = true;
    } else {
      this.showBackToTop = false;
    }

    this.reveal();
  }

  /**
   * Adiciona a classe 'active' aos elementos com a classe '.reveal' quando
   * eles se tornam visíveis.
   */
  private reveal(): void {
    const reveals: HTMLElement[] = this.el.nativeElement.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const elementVisible = 150; 

    reveals.forEach((element, index) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const isActive = element.classList.contains('active');
      
      if (window.scrollY < 100) {
        const heroElements = this.el.nativeElement.querySelectorAll('#home .reveal');
        heroElements.forEach((element: HTMLElement) => {
          this.renderer.addClass(element, 'active');
        });
      }
      
      if (elementTop < windowHeight - elementVisible && elementBottom > elementVisible) {
        if (!isActive) {
          this.renderer.addClass(element, 'active');
        }
      }
    });
  }

  /**
   * Rola a página para o topo.
   */
  scrollToTop(event?: MouseEvent): void {
    if (event) {
      event.preventDefault();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
