import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {
  skills = [
    { name: 'HTML5', iconClass: 'fab fa-html5', colorClass: 'text-orange-500' },
    { name: 'CSS3', iconClass: 'fab fa-css3-alt', colorClass: 'text-blue-500' },
    { name: 'JavaScript', iconClass: 'fab fa-js-square', colorClass: 'text-yellow-400' },
    { name: 'Angular', iconClass: 'fab fa-angular', colorClass: 'text-red-600' },
    { name: 'Flutter', iconClass: 'fas fa-mobile-alt', colorClass: 'text-sky-400' },
    { name: 'Java', iconClass: 'fab fa-java', colorClass: 'text-red-500' },
    { name: 'Python', iconClass: 'fab fa-python', colorClass: 'text-blue-400' },
    { name: 'Node.js', iconClass: 'fab fa-node-js', colorClass: 'text-green-500' },
    { name: 'Spring', iconClass: 'fas fa-leaf', colorClass: 'text-green-600' },
    { name: 'SQL', iconClass: 'fas fa-database', colorClass: 'text-sky-500' },
    { name: 'Docker', iconClass: 'fab fa-docker', colorClass: 'text-blue-600' },
    { name: 'Git', iconClass: 'fab fa-git-alt', colorClass: 'text-orange-600' },
  ];

  trackBySkill(index: number, skill: any): string {
    return skill.name;
  }
}
