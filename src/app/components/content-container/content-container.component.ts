import { Component, input, Signal } from '@angular/core';

@Component({
  selector: 'app-content-container',
  imports: [],
  templateUrl: './content-container.component.html',
  styleUrl: './content-container.component.scss'
})
export class ContentContainerComponent {
  title = input("hi");
}
