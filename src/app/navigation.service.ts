import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private closeArticleAndNavigateSubject = new Subject<string>();
  
  closeArticleAndNavigate$ = this.closeArticleAndNavigateSubject.asObservable();

  navigateToSection(sectionId: string) {
    this.closeArticleAndNavigateSubject.next(sectionId);
  }
}
