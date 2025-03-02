import { Component, input, Signal } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-content-container',
  imports: [CdkDrag],
  templateUrl: './content-container.component.html',
  styleUrl: './content-container.component.scss'
})
export class ContentContainerComponent {
  title = input("hi");
  showBackground = input<boolean>(false)

  dragPosition = {x: 0, y: 0};

  changePosition() {
    this.dragPosition = {x: this.dragPosition.x + 50, y: this.dragPosition.y + 50};
  }
}
