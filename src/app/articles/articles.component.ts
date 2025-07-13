import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
}

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles.html',
  styleUrls: ['./articles.css'],
  host: {
    '(document:keydown)': 'onKeyDown($event)'
  }
})
export class ArticlesComponent {
  articles: Article[] = [
//     {
//       id: 1,
//       title: 'Começando com Angular 17: Standalone Components',
//       excerpt: 'Descubra as vantagens dos standalone components no Angular 17 e como eles simplificam o desenvolvimento de aplicações.',
//       content: `
//         <p>O Angular 17 trouxe muitas novidades interessantes, e uma das mais impactantes são os standalone components. Esta nova abordagem simplifica drasticamente a estrutura de projetos Angular, eliminando a necessidade de módulos para muitos casos de uso.</p>
        
//         <h3>O que são Standalone Components?</h3>
//         <p>Standalone components são componentes que podem ser usados independentemente, sem precisar ser declarados em um módulo. Eles carregam suas próprias dependências e podem ser importados diretamente onde necessário.</p>
        
//         <h3>Vantagens dos Standalone Components</h3>
//         <ul>
//           <li>Menos código boilerplate</li>
//           <li>Estrutura mais simples</li>
//           <li>Melhor tree-shaking</li>
//           <li>Easier lazy loading</li>
//         </ul>
        
//         <h3>Como criar um Standalone Component</h3>
//         <pre><code>@Component({
//   selector: 'app-example',
//   standalone: true,
//   imports: [CommonModule],
//   template: \`<h1>Hello Standalone!</h1>\`
// })
// export class ExampleComponent { }</code></pre>
        
//         <p>Com essa nova abordagem, o desenvolvimento Angular se torna mais intuitivo e próximo de outros frameworks modernos.</p>
//       `,
//       date: '2024-01-15',
//       readTime: '5 min',
//       tags: ['Angular', 'TypeScript', 'Frontend']
//     },
    {
      id: 2,
      title: 'Linux ultrapassa 5% de participação no mercado de desktops nos EUA',
      excerpt: 'Linux ultrapassa a marca de 5% de participação em desktops nos EUA — um marco simbólico e promissor para o sistema do pinguim.',
      image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      content: `
<p>O que por muito tempo parecia impossível agora é realidade: o <strong>Linux</strong> ultrapassou a marca de <strong>5% de participação no mercado de desktops nos Estados Unidos</strong>. O dado, divulgado pela plataforma de estatísticas <em>StatCounter</em>, se refere ao mês de <strong>junho de 2025</strong> e marca um avanço histórico para o sistema do pinguim.</p>
<h2>Uma conquista simbólica, mas significativa</h2>
<p>Mesmo sendo amplamente usado em servidores, supercomputadores e dispositivos embarcados, o Linux sempre teve dificuldades para conquistar espaço no desktop. Durante anos, sua fatia de mercado girava em torno de 1% a 2%. Mas isso começou a mudar com a evolução das distribuições, maior compatibilidade com hardware e o crescente apoio da comunidade gamer.</p>
<p>Distribuições como <strong>Ubuntu</strong>, <strong>Pop!_OS</strong>, <strong>Fedora</strong>, <strong>Linux Mint</strong> e <strong>Arch Linux</strong> vêm ganhando cada vez mais usuários. A experiência de uso ficou mais amigável, o desempenho melhorou e o suporte para drivers e softwares cresceu.</p>
<h2>Steam, jogos e liberdade</h2>
<p>Um dos principais motores desse crescimento é a <strong>Valve</strong>, com sua plataforma <strong>Steam</strong> e o projeto <strong>Proton</strong>, que permite rodar jogos de Windows no Linux com desempenho impressionante. O <strong>Steam Deck</strong>, console portátil baseado em Linux, também teve papel importante ao familiarizar muitos usuários com o sistema.</p>
<p>Outro fator é o aumento da preocupação com <strong>privacidade</strong>, <strong>transparência</strong> e <strong>liberdade digital</strong>, temas em que o Linux sempre teve destaque.</p>
<h2>E agora?</h2>
<p>Ultrapassar os 5% nos EUA pode parecer pouco frente ao domínio do Windows, mas esse número mostra que o Linux está mais presente do que nunca. Ele saiu da bolha de nicho e começa a ganhar espaço entre usuários comuns, criadores de conteúdo, profissionais e até gamers.</p>
<p>O próximo desafio? Manter o crescimento e conquistar ainda mais usuários ao redor do mundo.</p>
`,
      date: '2025-07-13',
      readTime: '2 min',
      tags: ['linux', 'estatísticas', 'mercado', 'sistemas operacionais'],
    },
//     {
//       id: 3,
//       title: 'TypeScript: Tipos Avançados que Todo Dev Deveria Conhecer',
//       excerpt: 'Explore tipos avançados do TypeScript como Union Types, Intersection Types, Conditional Types e muito mais.',
//       content: `
//         <p>TypeScript oferece um sistema de tipos muito poderoso que vai muito além dos tipos básicos. Conhecer esses tipos avançados pode tornar seu código mais seguro e expressivo.</p>
        
//         <h3>Union Types</h3>
//         <p>Permitem que uma variável tenha um de vários tipos possíveis:</p>
//         <pre><code>type Status = 'loading' | 'success' | 'error';
// type ID = string | number;</code></pre>
        
//         <h3>Intersection Types</h3>
//         <p>Combinam múltiplos tipos em um:</p>
//         <pre><code>type User = {
//   name: string;
//   email: string;
// }

// type Admin = {
//   permissions: string[];
// }

// type AdminUser = User & Admin;</code></pre>
        
//         <h3>Conditional Types</h3>
//         <p>Tipos que dependem de uma condição:</p>
//         <pre><code>type ApiResponse<T> = T extends string 
//   ? { message: T } 
//   : { data: T };</code></pre>
        
//         <h3>Mapped Types</h3>
//         <p>Criam novos tipos baseados em tipos existentes:</p>
//         <pre><code>type Partial<T> = {
//   [P in keyof T]?: T[P];
// }

// type ReadOnly<T> = {
//   readonly [P in keyof T]: T[P];
// }</code></pre>
        
//         <p>Dominar esses conceitos elevará seu código TypeScript a um novo nível!</p>
//       `,
//       date: '2024-01-01',
//       readTime: '8 min',
//       tags: ['TypeScript', 'Programming', 'Types']
//     }
  ];

  selectedArticle: Article | null = null;
  showBackToTopInArticle = false;

  constructor(private cdr: ChangeDetectorRef) {}

  onArticleScroll(event: Event): void {
    const element = event.target as HTMLElement;
    if (element.scrollTop > 300) {
      this.showBackToTopInArticle = true;
    } else {
      this.showBackToTopInArticle = false;
    }
  }

  selectArticle(article: Article): void {
    this.selectedArticle = article;
    // Esconde o botão global de voltar ao topo via CSS
    this.hideGlobalBackToTop();
    // Previne scroll do body principal
    document.body.classList.add('article-open');
    // Não mostra o botão imediatamente - deixa o scroll determinar
    this.showBackToTopInArticle = false;
    // Força detecção de mudanças
    this.cdr.detectChanges();
  }

  goBack(): void {
    this.selectedArticle = null;
    this.showBackToTopInArticle = false;
    // Restaura o scroll do body principal
    document.body.classList.remove('article-open');
    // Reexibe o botão global de voltar ao topo
    this.showGlobalBackToTop();
    setTimeout(() => {
      const blogSection = document.getElementById('articles');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  getTagColor(tag: string): string {
    const colors: { [key: string]: string } = {
      'Angular': 'catppuccin-red',        // Red #e78284
      'TypeScript': 'catppuccin-blue',    // Blue #8caaee
      'Frontend': 'catppuccin-green',     // Green #a6d189
      'CSS': 'catppuccin-mauve',          // Mauve #ca9ee6
      'Layout': 'catppuccin-yellow',      // Yellow #e5c890
      'Programming': 'catppuccin-lavender', // Lavender #babbf1
      'Types': 'catppuccin-pink',         // Pink #f4b8e4
      'linux': 'catppuccin-peach',       // Peach #ef9f76
      'estatísticas': 'catppuccin-teal',  // Teal #81c8be
      'mercado': 'catppuccin-sky',        // Sky #99d1db
      'sistemas operacionais': 'catppuccin-surface2' // Surface2 #626880
    };
    return colors[tag] || 'catppuccin-overlay0';
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.selectedArticle) {
      this.goBack();
    }
  }

  scrollToTopInArticle(): void {
    const articleContainer = document.querySelector('.fullscreen-article');
    if (articleContainer) {
      articleContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  private hideGlobalBackToTop(): void {
    const globalBackToTopButton = document.getElementById('to-top-button');
    if (globalBackToTopButton) {
      globalBackToTopButton.style.display = 'none';
      globalBackToTopButton.style.visibility = 'hidden';
    }
  }

  private showGlobalBackToTop(): void {
    const globalBackToTopButton = document.getElementById('to-top-button');
    if (globalBackToTopButton) {
      globalBackToTopButton.style.display = '';
      globalBackToTopButton.style.visibility = 'visible';
    }
  }
}
