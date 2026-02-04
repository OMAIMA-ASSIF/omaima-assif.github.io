import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    CertificationsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-navbar [activeSection]="activeSection"></app-navbar>

    <main class="main-content min-h-screen w-full">

      <!--background glows-->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-pink-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div class="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[100px] animate-pulse" style="animation-delay: 3s;"></div>
      </div>

      <!--the scars-->
      <div class="absolute inset-0 opacity-[0.15] animate-in fade-in duration-1000 pointer-events-none"
          style="background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px);
                  background-size: 50px 50px;
                  mask-image: linear-gradient(to bottom, white 0%, transparent 800px);
                  -webkit-mask-image: linear-gradient(to bottom, white 0%, transparent 800px);">
      </div>

      <section id="home" class="section">
        <app-home></app-home>
      </section>

      <section id="about" class="section ">
        <app-about></app-about>
      </section>

      <section id="skills" class="section">
        <app-skills></app-skills>
      </section>

      <section id="projects" class="section">
        <app-projects></app-projects>
      </section>

      <section id="certifications" class="section">
        <app-certifications></app-certifications>
      </section>

      <section id="experience" class="section">
        <app-experience></app-experience>
      </section>

      <section id="contact" class="section">
        <app-contact></app-contact>
      </section>
    </main>

    <app-footer></app-footer>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }

    .main-content {
      position: relative;
      width: 100%;
      background: transparent;
    }

    .section {
      scroll-margin-top: 80px;
      animation: fadeInUp 0.8s ease-out;
      width: 100%;
      background: transparent;
    }

    @keyframes fadeInUp {
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
export class App implements OnInit {
  activeSection = 'home';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.setupScrollSpying();
  }

  private setupScrollSpying(): void {
    window.addEventListener('scroll', () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'experience', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            this.activeSection = section;
            break;
          }
        }
      }
    });
  }
}
