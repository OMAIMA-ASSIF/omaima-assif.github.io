import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="certifications"
      class="min-h-screen flex items-center py-24 transition-colors duration-300 relative overflow-hidden bg-transparent"
    >
      <!-- Background decoration -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
        <div class="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16 animate-fade-in-down">
          <h2
            class="text-5xl md:text-6xl font-bold text-shadow"
            [class]="(isDarkMode$ | async) ? 'text-white' : 'text-black'"
          >
            <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Certifications & Achievements</span>
          </h2>
          <p class="text-lg mt-4" [class]="(isDarkMode$ | async) ? 'text-gray-400' : 'text-gray-600'">
            Recognized expertise and continuous learning
          </p>
        </div>

      </div>
    </section>
  `,
  styles: [`
    @keyframes slideInFromBottom {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class CertificationsComponent {
  private themeService: ThemeService;
  isDarkMode$: Observable<boolean>;

  constructor(themeService: ThemeService) {
    this.themeService = themeService;
    this.isDarkMode$ = themeService.darkMode$;
  }

  certifications = [
    {
      title: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: 'Issued: January 2024',
      icon: '🏆'
    },
    {
      title: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Issued: November 2023',
      icon: '☁️'
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'Coursera - Andrew Ng',
      date: 'Issued: August 2023',
      icon: '🤖'
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Udacity',
      date: 'Issued: May 2023',
      icon: '💻'
    },
    {
      title: 'Angular Developer',
      issuer: 'Angular Training',
      date: 'Issued: March 2023',
      icon: '⚡'
    }
  ];
}
