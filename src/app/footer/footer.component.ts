import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/rflmoreira' },
    { icon: 'fab fa-linkedin', url: 'www.linkedin.com/in/rafael-moreira-lima-70ba71226' },
    { icon: 'fas fa-envelope', url: 'mailto:rafael.desenvolvedor@proton.me' },
    { icon: 'fab fa-whatsapp', url: 'https://wa.me/5511935351079' }
  ];
}