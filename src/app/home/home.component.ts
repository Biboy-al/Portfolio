import { Component } from '@angular/core';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { ContentContainerComponent } from '../components/content-container/content-container.component';

@Component({
  selector: 'app-home',
  imports: [AboutMeComponent, ContentContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
