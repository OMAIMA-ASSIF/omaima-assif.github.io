import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience"
      class="min-h-screen py-24 relative overflow-hidden transition-colors duration-500 bg-transparent"
      [ngClass]="(isDarkMode$ | async) ? 'text-white' : 'text-slate-900'">

      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl relative z-10">

        <div class="mb-24">
          <h2 class="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
            WORK<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">HISTORY</span>
          </h2>
          <div class="h-px w-32 bg-gradient-to-r from-purple-500 to-transparent"></div>
        </div>

        <div class="space-y-20"> <div *ngFor="let exp of experience; let i = index"
            class="relative grid md:grid-cols-12 gap-8 md:gap-12 group">

            <div class="md:col-span-3">
              <div class="sticky top-24">
                <p class="text-sm font-mono tracking-widest opacity-40 group-hover:opacity-100 group-hover:text-purple-400 transition-all duration-300">
                  {{ exp.period }}
                </p>
                <div class="mt-4 h-0.5 w-8 bg-white/10 group-hover:w-16 group-hover:bg-purple-500 transition-all duration-500"></div>
              </div>
            </div>

            <div class="md:col-span-9">
              <div class="flex flex-col">
                <h3 class="text-3xl md:text-5xl font-bold tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-300">
                  {{ exp.title }}
                </h3>

                <p class="text-xl font-medium text-purple-500/90 mb-6">
                  {{ exp.company }}
                </p>

                <p class="text-lg opacity-60 leading-relaxed max-w-3xl mb-8">
                  {{ exp.description }}
                </p>

                <div class="flex flex-wrap gap-3">
                  <span *ngFor="let tag of exp.tags"
                    class="px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] border border-white/10 bg-white/5 transition-all hover:bg-white/10 hover:border-white/20">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {
  private themeService = inject(ThemeService);
  isDarkMode$ = this.themeService.darkMode$;

  experience = [
    {
      title: 'Social Media Manager',
      company: 'GDG on Campus - ENSET Mohammedia',
      period: 'OCT 2025 — PRESENT',
      description: 'Driving the digital narrative for the developer community. I focus on creating high-impact content that simplifies complex engineering concepts for a broad student audience.',
      tags: ['Strategy', 'Leadership', 'Design']
    },
    {
      title: 'CS Tutor',
      company: 'Academic Mentorship',
      period: '4 MONTHS (2025)',
      description: 'Delivered deep-dive sessions on Computer Architecture and Data Structures. Focused on optimizing student logic for low-level programming and memory-efficient algorithms.',
      tags: ['Architecture', 'C', 'Mentorship']
    },
    {
      title: 'Full Stack Developer',
      company: 'SUEZ',
      period: 'JULY — AUG 2025',
      description: 'Modernized internal workflows during a 2-month internship. Developed full-stack features to handle environmental data monitoring with a focus on real-time performance.',
      tags: ['ERP 365', 'Node.js', 'PostgreSQL', 'Expressjs', 'Reactjs', 'TailwindCSS', 'postman']
    }
  ];
}
