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
  
  showOrientationButton = false;
  isMobile = false;

  constructor(private threeBgService: ThreeBgService) {
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  ngAfterViewInit(): void {
    if (this.bgCanvas) {
      this.threeBgService.createScene(this.bgCanvas);
      this.threeBgService.animate();
      
      if (this.isMobile && typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        this.showOrientationButton = true;
      }
    }
  }

  scrollToProjects(event: MouseEvent): void {
    event.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  async enableDeviceMotion(): Promise<void> {
    const granted = await this.threeBgService.requestDeviceOrientationPermission();
    if (granted) {
      this.showOrientationButton = false;
    }
  }
}
