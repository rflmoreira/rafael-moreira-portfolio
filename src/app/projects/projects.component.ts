import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'AION',
      description: 'Desenvolvida durante o bootcamp da Generation Brasil, AION é uma rede social com foco no ODS 8 da ONU — Trabalho Decente e Crescimento Econômico. A plataforma foi criada para conectar voluntários a oportunidades de impacto, promovendo inclusão produtiva e contribuindo para o desenvolvimento sustentável.',
      technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'Node.js', 'MySQL'],
      githubLink: 'https://github.com/Projeto-Aion',
      externalLink: 'https://projeto-aion.netlify.app/'
    },
    {
      title: 'Simple Lofi Player',
      description: 'Um player de música lo-fi (low-fidelity), um estilo musical que valoriza a simplicidade e a imperfeição. Com influências analógicas e texturas sonoras, o app cria uma atmosfera relaxante e nostálgica, perfeita para estudar, trabalhar ou simplesmente relaxar.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      githubLink: 'https://github.com/rflmoreira/simple-lofi-player',
      externalLink: 'https://simplelofiplayer.netlify.app/'
    },
    {
      title: 'Clima Tempo App',
      description: 'Uma aplicação web para consulta de previsão do tempo em tempo real. Utilizando a API da OpenWeatherMap, o app busca e exibe informações detalhadas sobre o clima, como temperatura, umidade e condições atuais, em uma interface simples e direta, focada na experiência do usuário.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Weather API'],
      githubLink: 'https://github.com/rflmoreira/weather_app',
      externalLink: 'https://climatempoo.netlify.app/'
    },
    {
      title: 'AMV Player',
      description: 'Um player de vídeo dedicado à cultura dos AMVs (Anime Music Videos), que apresenta uma coleção de vídeos criados por fãs, combinando a magia dos animes com trilhas sonoras impactantes.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      githubLink: 'https://github.com/rflmoreira/amv_player',
      externalLink: 'https://amvplayer.netlify.app/'
    }
  ];

  trackByProject(index: number, project: any): string {
    return project.title;
  }
}
