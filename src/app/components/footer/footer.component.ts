import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer
      class="py-8 transition-colors duration-500 border-t border-current/[0.05]"
      [ngClass]="(isDarkMode$ | async) ? 'text-white/40' : 'text-slate-500'">
      <div class='h-5'></div>

      <div class="container mx-auto px-6 flex flex-col items-center gap-4">

        <nav class="flex gap-6 text-[10px] uppercase tracking-[0.2em] font-medium">
          <a href="#home" class="hover:text-purple-500 transition-colors">Home</a>
          <a href="#about" class="hover:text-purple-500 transition-colors">About</a>
          <a href="#projects" class="hover:text-purple-500 transition-colors">Projects</a>
          <a href="#contact" class="hover:text-purple-500 transition-colors">Contact</a>
        </nav>

        <div class="text-center">
          <p class="text-xs font-light tracking-wide">
            &copy; 2026 <span class="font-bold italic opacity-100 text-current">Omaima Assif</span>
          </p>
        </div>

        <p class="text-[10px] italic opacity-60 tracking-widest uppercase">
          Elegant solutions for complex problems
        </p>

      </div>
    </footer>
  `
})
export class FooterComponent {
  private themeService = inject(ThemeService);
  isDarkMode$ = this.themeService.darkMode$;
}
