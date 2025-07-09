import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeBgService } from '../three-bg.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('bgCanvas', { static: true }) private bgCanvas!: ElementRef<HTMLCanvasElement>;
  
  isMobile = false;

  constructor(private threeBgService: ThreeBgService) {
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  ngAfterViewInit(): void {
    if (this.bgCanvas) {
      this.threeBgService.createScene(this.bgCanvas);
      this.threeBgService.animate();
    }
  }

  async onHeroClick(): Promise<void> {
    if (this.threeBgService.requiresPermission) {
      await this.threeBgService.requestDeviceOrientationPermission();
    }
  }

  scrollToProjects(event: MouseEvent): void {
    event.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
