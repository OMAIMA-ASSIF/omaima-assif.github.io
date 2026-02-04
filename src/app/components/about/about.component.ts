import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about"
      class="min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-700">

      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-orange-600/20 rounded-full blur-[120px] transition-opacity duration-1000"
             [class.opacity-0]="!isHovered" [class.opacity-100]="isHovered"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="flex flex-col items-center justify-center group cursor-crosshair"
             (mouseenter)="isHovered = true"
             (mouseleave)="isHovered = false">

          <div class="relative mb-8 text-center transition-all duration-700 ease-in-out"
               [class.scale-75]="isHovered" [class.-translate-y-24]="isHovered">

            <h3 class="font-black tracking-tighter leading-tight inline-block transition-all duration-500"
                [ngClass]="isHovered ? 'text-3xl md:text-5xl max-w-4xl' : 'text-7xl md:text-[12rem]'">

              <ng-container *ngIf="!isHovered; else identityText">
                WHO AM
                <span class="block md:inline text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500">
                  I?
                </span>
              </ng-container>

              <ng-template #identityText>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500">
                  Omaima, 21 years old,
                </span>
                from Casablanca.
                <span class="opacity-80">Software & distributed computing systems at ENSET Mohammedia.</span>
              </ng-template>
            </h3>

            <p class="mt-4 font-mono text-xs tracking-[0.5em] uppercase opacity-40 group-hover:opacity-0 transition-opacity">
              [ Hover to decrypt identity ]
            </p>
          </div>

          <div class="absolute inset-0 flex items-center justify-center pointer-events-none"
              [class.opacity-100]="isHovered" [class.opacity-0]="!isHovered">

            <div class="flex flex-col items-center w-full max-w-7xl transition-all duration-1000 transform px-6"
                [class.translate-y-12]="isHovered" [class.translate-y-40]="!isHovered">

              <div class="flex flex-wrap justify-center gap-4 w-full">
                <div *ngFor="let stat of stats"
                    class="min-w-[160px] p-6 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl flex flex-col items-center justify-center group/stat hover:border-purple-500/50 transition-colors">
                  <span class="text-4xl font-black tracking-tighter mb-1 group-hover/stat:text-purple-400 transition-colors">
                    {{ stat.value }}
                  </span>
                  <span class="text-[9px] font-mono uppercase tracking-widest opacity-40 text-center">
                    {{ stat.label }}
                  </span>
                </div>
              </div>

            </div>
          </div>
          <!--barakaaaa-->
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .backdrop-blur-2xl { backdrop-filter: blur(40px); }
  `]
})
export class AboutComponent {
  private themeService = inject(ThemeService);
  isDarkMode$ = this.themeService.darkMode$;

  isHovered = false;


  stats = [
    { value: '20+', label: 'Certifications' },
    { value: '33+', label: 'Technologies' },
    { value: '01', label: 'Vision' }
  ];
}
