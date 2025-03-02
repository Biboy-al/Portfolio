import { Component, input } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-screen',
  imports: [CdkDrag],
  templateUrl: './screen.component.html',
  styleUrl: './screen.component.scss'
})
export class ScreenComponent {
  title = input("");

  dragPosition = {x: 0, y: 0};

  changePosition() {
    this.dragPosition = {x: this.dragPosition.x + 50, y: this.dragPosition.y + 50};
  }
}
