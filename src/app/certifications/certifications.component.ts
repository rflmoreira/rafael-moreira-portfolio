import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css'
})
export class CertificationsComponent {
  certifications = [
    {
      title: 'Programação em Python',
      issuer: 'SENAI São Paulo – Nov de 2024',
      link: 'https://www.sp.senai.br/consulta-certificado?qrcode=10124202127/14825364'
    },
    {
      title: 'Introdução à Ciência da Computação com Python',
      issuer: 'IME-USP – Set de 2024',
      link: 'https://www.coursera.org/account/accomplishments/certificate/K6QD56E21XKC'
    },
    {
      title: 'Desenvolvedor Web Java Junior',
      issuer: 'Generation Brasil – Mai de 2022',
      link: 'https://e-certificado.com/login/visualizar?c=1307253AB5AB45428839190'
    }
  ];

  trackByCert(index: number, cert: any): string {
    return cert.title;
  }
}
