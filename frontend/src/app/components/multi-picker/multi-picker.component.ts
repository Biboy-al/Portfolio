import { CommonModule, NgFor } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-multi-picker',
  imports: [CommonModule, NgFor],
  templateUrl: './multi-picker.component.html',
  styleUrl: './multi-picker.component.scss'
})
export class MultiPickerComponent {
  tabs : string[] = ["About Me", "Goals", "Passions", "Interests"];
  selected : string = this.tabs[0];

}
