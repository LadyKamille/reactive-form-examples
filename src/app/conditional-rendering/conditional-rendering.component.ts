import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'conditional-rendering',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './conditional-rendering.component.html',
  styleUrls: ['./conditional-rendering.component.scss'],
})
export class ConditionalRenderingComponent {}
