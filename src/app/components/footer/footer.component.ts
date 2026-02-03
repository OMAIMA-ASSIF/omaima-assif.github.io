import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer
      class="py-12 transition-colors duration-300 border-t backdrop-blur-sm bg-transparent"
      [ngClass]="(isDarkMode$ | async) ? 'border-white/10' : 'border-black/10'"
    >
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-8 mb-8">
          <!-- Brand -->
          <div class="text-center md:text-left">
            <h3 class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Omaima Assif
            </h3>
            <p [class]="(isDarkMode$ | async) ? 'text-gray-400' : 'text-gray-600'" class="text-sm">
              Software & AI Engineer
            </p>
          </div>

          <!-- Quick Links -->
          <div class="text-center">
            <h4 class="font-bold mb-3" [class]="(isDarkMode$ | async) ? 'text-white' : 'text-black'">
              Quick Links
            </h4>
            <div class="flex gap-4 justify-center">
              <a href="#home" class="text-sm hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text transition-all duration-300" [class]="(isDarkMode$ | async) ? 'text-gray-400 hover:text-transparent' : 'text-gray-600 hover:text-transparent'">Home</a>
              <a href="#about" class="text-sm hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text transition-all duration-300" [class]="(isDarkMode$ | async) ? 'text-gray-400 hover:text-transparent' : 'text-gray-600 hover:text-transparent'">About</a>
              <a href="#projects" class="text-sm hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text transition-all duration-300" [class]="(isDarkMode$ | async) ? 'text-gray-400 hover:text-transparent' : 'text-gray-600 hover:text-transparent'">Projects</a>
            </div>
          </div>


        </div>

        <!-- Divider -->
        <div class="border-t" [class]="(isDarkMode$ | async) ? 'border-gray-800/50' : 'border-gray-200/50'"></div>

        <!-- Copyright -->
        <div class="mt-8 text-center space-y-2">
          <p [class]="(isDarkMode$ | async) ? 'text-gray-400' : 'text-gray-600'" class="text-sm">
            &copy; 2024 Omaima Assif. All rights reserved.
          </p>
          <p
            class="italic text-sm transition-colors duration-300 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            "Turning complex questions into elegant solutions"
          </p>
          
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  private themeService: ThemeService;
  isDarkMode$: Observable<boolean>;

  constructor(themeService: ThemeService) {
    this.themeService = themeService;
    this.isDarkMode$ = themeService.darkMode$;
  }
}
