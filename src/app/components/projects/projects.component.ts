import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="projects"
      class="min-h-screen flex items-center py-24 transition-colors duration-300 relative overflow-hidden bg-transparent"
    >
      <!-- Background elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 right-20 w-72 h-72 bg-pink-500 rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-20 left-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16 animate-fade-in-down">
          <h2
            class="text-5xl md:text-6xl font-bold mb-4 text-shadow transition-colors duration-300"
            [class]="(isDarkMode$ | async) ? 'text-white' : 'text-black'"
          >
            Featured <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p
            class="text-lg transition-colors duration-300"
            [class]="(isDarkMode$ | async) ? 'text-gray-400' : 'text-gray-600'"
          >
            Innovative solutions that solve real-world problems
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
export class ProjectsComponent {
  private themeService: ThemeService;
  isDarkMode$: Observable<boolean>;

  constructor(themeService: ThemeService) {
    this.themeService = themeService;
    this.isDarkMode$ = themeService.darkMode$;
  }

  projects = [
    {
      title: 'AI Chat Application',
      description: 'An intelligent chatbot powered by machine learning and NLP',
      icon: '💬',
      technologies: ['Python', 'TensorFlow', 'React']
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      icon: '🛒',
      technologies: ['Angular', 'Node.js', 'MongoDB']
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Real-time analytics dashboard for business insights',
      icon: '📊',
      technologies: ['React', 'D3.js', 'Flask']
    },
    {
      title: 'Machine Learning Model',
      description: 'Predictive model for customer behavior analysis',
      icon: '🤖',
      technologies: ['Python', 'Scikit-learn', 'Pandas']
    },
    {
      title: 'Mobile App',
      description: 'Cross-platform mobile application with real-time features',
      icon: '📱',
      technologies: ['Flutter', 'Firebase']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud infrastructure for enterprise applications',
      icon: '☁️',
      technologies: ['AWS', 'Docker', 'Kubernetes']
    }
  ];
}
