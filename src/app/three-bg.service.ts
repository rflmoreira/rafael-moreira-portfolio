import { Injectable, ElementRef, NgZone } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class ThreeBgService {
  private canvas!: HTMLCanvasElement;
  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private particlesMesh!: THREE.Points;
  private mouse = new THREE.Vector2();
  private deviceOrientation = new THREE.Vector2();
  private isMobile = false;
  private sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  constructor(private ngZone: NgZone) {
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    if (!canvas || !canvas.nativeElement) {
      console.error('Canvas element not found');
      return;
    }
    
    this.canvas = canvas.nativeElement;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, this.sizes.width / this.sizes.height, 0.1, 100);
    this.camera.position.z = 20;
    this.scene.add(this.camera);

    this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        alpha: true
    });
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 7000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 40;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: 0x818cf8,
        transparent: true,
        blending: THREE.AdditiveBlending
    });
    this.particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    this.scene.add(this.particlesMesh);
  }

  public animate(): void {
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }
      
      window.addEventListener('resize', () => {
        this.resize();
      });
      
      document.addEventListener('mousemove', (event) => {
        this.mouse.x = (event.clientX / this.sizes.width) * 2 - 1;
        this.mouse.y = -(event.clientY / this.sizes.height) * 2 + 1;
      });

      if (this.isMobile) {
        this.setupMobileControls();
      }
    });
  }

  private render(): void {
    const clock = new THREE.Clock();
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      this.particlesMesh.rotation.y = elapsedTime * 0.05;
      
      if (this.isMobile) {
        this.particlesMesh.rotation.x = -this.deviceOrientation.y * (elapsedTime * 0.0008);
        this.particlesMesh.rotation.z = -this.deviceOrientation.x * (elapsedTime * 0.0008);
      } else {
        this.particlesMesh.rotation.x = -this.mouse.y * (elapsedTime * 0.0008);
        this.particlesMesh.rotation.z = -this.mouse.x * (elapsedTime * 0.0008);
      }
      
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(tick);
    };
    tick();
  }

  private resize(): void {
    this.sizes.width = window.innerWidth;
    this.sizes.height = window.innerHeight;
    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.sizes.width, this.sizes.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  private setupMobileControls(): void {
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      (DeviceOrientationEvent as any).requestPermission()
        .then((response: string) => {
          if (response === 'granted') {
            this.addOrientationListeners();
          }
        })
        .catch(console.error);
    } else {
      this.addOrientationListeners();
    }
  }

  private addOrientationListeners(): void {
    window.addEventListener('deviceorientation', (event) => {
      if (event.beta !== null && event.gamma !== null) {
        const normalizedBeta = Math.max(-45, Math.min(45, event.beta || 0)) / 45;
        const normalizedGamma = Math.max(-45, Math.min(45, event.gamma || 0)) / 45;
        
        this.deviceOrientation.x = normalizedGamma;
        this.deviceOrientation.y = normalizedBeta;
      }
    });

    window.addEventListener('devicemotion', (event) => {
      if (event.accelerationIncludingGravity) {
        const { x, y } = event.accelerationIncludingGravity;
        if (x !== null && y !== null) {
          const normalizedX = Math.max(-5, Math.min(5, x)) / 5;
          const normalizedY = Math.max(-5, Math.min(5, y)) / 5;
          
          if (this.deviceOrientation.x === 0 && this.deviceOrientation.y === 0) {
            this.deviceOrientation.x = normalizedX;
            this.deviceOrientation.y = normalizedY;
          }
        }
      }
    });
  }

  public requestDeviceOrientationPermission(): Promise<boolean> {
    return new Promise((resolve) => {
      if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        (DeviceOrientationEvent as any).requestPermission()
          .then((response: string) => {
            if (response === 'granted') {
              this.addOrientationListeners();
              resolve(true);
            } else {
              resolve(false);
            }
          })
          .catch(() => resolve(false));
      } else {
        this.addOrientationListeners();
        resolve(true);
      }
    });
  }
}
