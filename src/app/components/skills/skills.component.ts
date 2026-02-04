import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills"
      class="min-h-screen flex items-center py-24 transition-colors duration-500 relative overflow-hidden bg-transparent"
      [ngClass]="(isDarkMode$ | async) ? '' : ''">


      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-5xl md:text-7xl font-bold mb-4 tracking-tighter"
              [ngClass]="(isDarkMode$ | async) ? 'text-white' : 'text-black'">
            My <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p class="text-lg opacity-60" [ngClass]="(isDarkMode$ | async) ? 'text-gray-300' : 'text-gray-600'">
            Click a field to explore my tech stack
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div *ngFor="let category of categories" class="relative">

            <div
              (click)="toggleCategory(category.id)"
              class="cursor-pointer p-8 rounded-2xl border transition-all duration-500 group relative overflow-hidden h-full flex flex-col items-center text-center justify-center"
              [ngClass]="[
                activeCategory() === category.id ? 'scale-105 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.2)]' : 'border-gray-700/50 hover:border-purple-500/50',
                (isDarkMode$ | async) ? 'bg-gray-900/40 backdrop-blur-md' : 'bg-white shadow-xl shadow-slate-200/50'
              ]"
            >
              <div class="mb-4 p-4 rounded-2xl transition-all duration-500 group-hover:rotate-12"
                   [ngClass]="activeCategory() === category.id ? 'bg-purple-600 text-white' : 'bg-purple-500/10 text-purple-400'">
                <div class="w-8 h-8" [innerHTML]="category.icon"></div>
              </div>

              <h3 class="text-xl font-bold mb-2 tracking-tight" [ngClass]="(isDarkMode$ | async) ? 'text-white' : 'text-black'">
                {{ category.title }}
              </h3>

              <span class="text-xs font-mono tracking-widest uppercase opacity-40">
                {{ activeCategory() === category.id ? 'Close' : 'View Stack' }}
              </span>
            </div>

            <div *ngIf="activeCategory() === category.id"
                 class="absolute top-[110%] left-0 w-full z-50 p-6 rounded-2xl border border-purple-500/30 animate-reveal"
                 [ngClass]="(isDarkMode$ | async) ? 'bg-black/90 backdrop-blur-xl shadow-2xl shadow-purple-500/20' : 'bg-white shadow-2xl'">
              <div class="flex flex-wrap gap-2">
                <span *ngFor="let tech of category.skills"
                      class="px-3 py-1 rounded-full text-xs font-medium border border-purple-500/20 bg-purple-500/5 text-purple-400 hover:bg-purple-500/20 transition-colors">
                  {{ tech }}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes reveal {
      from { opacity: 0; transform: translateY(-10px) scale(0.95); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    .animate-reveal {
      animation: reveal 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }
  `]
})
export class SkillsComponent {
  private themeService = inject(ThemeService);
  private sanitizer = inject(DomSanitizer);
  isDarkMode$ = this.themeService.darkMode$;

  // Angular Signal to track which card is open
  activeCategory = signal<string | null>(null);

  categories = [
    {
      id: 'ai',
      title: 'AI & ML',
      icon: this.getIcon(`<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><circle cx="12" cy="12" r="3"/>`),
      skills: ['Python', 'Streamlit', 'FastAPI', 'Flask', 'LangChain', 'ChromaDB', 'Qdrant', 'Neo4j', 'RAG', 'ML', 'MCP', 'Ollama']
    },
    {
      id: 'frontend',
      title: 'Frontend',
      icon: this.getIcon(`<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>`),
      skills: ['Angular', 'React', 'TypeScript', 'JS', 'Tailwind', 'Bootstrap', 'HTML', 'CSS', 'XML']
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: this.getIcon(`<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>`),
      skills: ['Node.js', 'Express.js', 'PHP', 'Java', 'JavaFX', 'C', 'Linux']
    },
    {
      id: 'data',
      title: 'Data & Cloud',
      icon: this.getIcon(`<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>`),
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
    }
  ];

  private getIcon(path: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>
    `);
  }

  toggleCategory(id: string) {
    if (this.activeCategory() === id) {
      this.activeCategory.set(null); // Close if clicking same card
    } else {
      this.activeCategory.set(id); // Open clicked card
    }
  }
}
