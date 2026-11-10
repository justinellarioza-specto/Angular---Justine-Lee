import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
  cardTitle = 'ABOUT ME';
  description = 'I build web interfaces that feel as good as they look — clean code underneath, deliberate design on top.';
}
