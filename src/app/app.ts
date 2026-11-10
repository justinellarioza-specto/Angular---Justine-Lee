import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Justine Lee Larioza';
  location = 'Angeles City, Pampanga';
  email = 'jnlarioza.loop@gmail.com';
  phone = '0998 883 2334';

  profile = 'As a third-year Bachelor of Science in Information Technology student specializing in Web Development at Holy Angel University, my primary professional goal is to master full-stack software architecture, responsive UI/UX design systems, and modern single-page application development. I am deeply passionate about engineering high-performance, accessible web platforms that bridge rigorous technical backend execution with immersive, beautifully crafted visual interfaces. Beyond coursework, I love exploring cutting-edge web tooling, participating in community tech extension programs, and experimenting with creative digital media.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular 22',
    'Swift & SwiftUI',
    'Three.js 3D Graphics',
    'Python Programming',
    'Git & GitHub Version Control',
    'Node.js & Express API Design',
    'UI/UX Design Systems'
  ];

  proficiencies = [
    { category: 'Frontend Development', items: ['HTML5 & CSS3', 'JavaScript', 'TypeScript', 'Angular 22', 'Responsive Layouts'] },
    { category: 'Backend & Programming', items: ['Node.js', 'Express APIs', 'Python', 'Swift & SwiftUI'] },
    { category: 'Tools & Design', items: ['Git & GitHub', 'VS Code', 'Three.js', 'UI/UX Design Systems'] }
  ];

  message = 'Welcome to my portfolio profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the interactive connection button ${this.clickCount} time(s).`;
  }
}
