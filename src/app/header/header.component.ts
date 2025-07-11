import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('lofiStream', { static: false }) audioElement!: ElementRef<HTMLAudioElement>;
  
  isPlaying = false;
  isLoading = false;
  userTriggeredPlay = false;

  ngOnInit() {
    // Component initialization
  }

  ngOnDestroy() {
    // Clean up audio when component is destroyed
    if (this.audioElement?.nativeElement) {
      this.audioElement.nativeElement.pause();
      this.audioElement.nativeElement.src = '';
    }
  }

  togglePlayPause() {
    if (!this.audioElement?.nativeElement) return;

    const audio = this.audioElement.nativeElement;
    
    if (this.isPlaying) {
      // Para a música e volta para o estado de play
      audio.pause();
      audio.load(); // Recarrega o stream para simular o "stop"
      this.isPlaying = false;
      this.isLoading = false;
      this.userTriggeredPlay = false;
    } else {
      this.userTriggeredPlay = true;
      this.isLoading = true;
      audio.play().catch(error => {
        console.error('Erro ao reproduzir áudio:', error);
        this.isLoading = false;
        this.userTriggeredPlay = false;
      });
    }
  }

  onAudioPlay() {
    this.isPlaying = true;
    this.isLoading = false;
    this.userTriggeredPlay = false;
  }

  onAudioPause() {
    // Só muda o estado se não foi um stop manual (que já ajustou os estados)
    if (this.isPlaying) {
      this.isPlaying = false;
      this.isLoading = false;
      this.userTriggeredPlay = false;
    }
  }

  onAudioLoadStart() {
    // Só mostra loading se o usuário tentou dar play
    if (this.userTriggeredPlay) {
      this.isLoading = true;
    }
  }

  onAudioCanPlay() {
    if (this.userTriggeredPlay) {
      this.isLoading = false;
    }
  }

  onAudioError() {
    this.isLoading = false;
    this.isPlaying = false;
    this.userTriggeredPlay = false;
    console.error('Erro ao carregar stream de áudio');
  }
}
