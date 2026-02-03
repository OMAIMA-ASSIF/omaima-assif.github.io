import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about"
      class="py-10 md:py-20 relative transition-colors duration-700 bg-transparent"
      [ngClass]="(isDarkMode$ | async) ? 'text-white' : 'text-slate-900'">

      <div class="container mx-auto px-8 md:px-16 lg:px-24 max-w-7xl relative z-10">

        <div class="grid lg:grid-cols-12 gap-0 md:gap-16 items-start">

          <div class="lg:col-span-1 hidden lg:flex flex-col items-center">
            <div class="w-px h-24 bg-gradient-to-b from-white/20 to-purple-500"></div>
            <div class="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] my-4"></div>
            <div class="w-px h-full min-h-[400px] bg-gradient-to-b from-purple-500 via-white/10 to-transparent"></div>
          </div>

          <div class="lg:col-span-11 grid lg:grid-cols-10 gap-12">

            <div class="lg:col-span-6 space-y-12">
              <div class="relative">
                <h2 class="text-xs font-black tracking-[0.5em] uppercase opacity-30 mb-4 block">// Profile_Inquiry</h2>
                <h3 class="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                  A STUDENT WITH<br/>
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500">BIG AMBITIONS.</span>
                </h3>
              </div>

              <p class="text-xl md:text-2xl leading-relaxed font-light opacity-80">
                Currently pursuing a State Engineering degree at <span class="text-white font-bold">ENSET Mohammedia</span>,
                I bridge the gap between pure mathematics and applied Artificial Intelligence.
              </p>

              <div class="space-y-10 pt-4">
                <div *ngFor="let edu of education" class="group relative pl-6 border-l border-white/5 hover:border-purple-500 transition-colors duration-500">
                  <div class="absolute -left-[1px] top-0 h-0 group-hover:h-full w-[1px] bg-purple-500 transition-all duration-500"></div>
                  <p class="text-[10px] font-mono text-purple-400 mb-1">{{ edu.year }}</p>
                  <h4 class="text-xl font-bold tracking-tight">{{ edu.degree }}</h4>
                  <p class="text-sm opacity-40 uppercase tracking-widest">{{ edu.institution }}</p>
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 flex flex-col gap-4">
              <div *ngFor="let stat of stats"
                class="relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md overflow-hidden group hover:bg-white/[0.05] transition-all duration-500">

                <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div class="relative z-10">
                  <p class="text-4xl md:text-5xl font-black tracking-tighter mb-1 group-hover:translate-x-2 transition-transform duration-500">
                    {{ stat.value }}
                  </p>
                  <p class="text-[10px] font-black uppercase tracking-[0.2em] opacity-30 group-hover:opacity-100 group-hover:text-purple-400 transition-all">
                    {{ stat.label }}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  private themeService = inject(ThemeService);
  isDarkMode$ = this.themeService.darkMode$;

  education = [
    {
      year: '2023 — 2026',
      degree: 'State Engineering Cycle',
      institution: 'ENSET Mohammedia',
    },
    {
      year: '2021 — 2023',
      degree: 'DEUG: Mathematics & CS',
      institution: 'Faculty of Sciences Ben M\'Sik',
    }
  ];

  stats = [
    { value: '20+', label: 'Certifications' },
    { value: '33+', label: 'Technologies' },
    { value: '01', label: 'Vision' }
  ];
}
