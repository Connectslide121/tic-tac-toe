import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  template: `
    @if (value == 'X') {
    <p class="playerX">{{ value }}</p>
    }@else if (value == 'O') {
    <p class="playerY">{{ value }}</p>
    }@else {
    <p>{{ value }}</p>
    }
  `,
  styles: `
  p{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 54px;
  }

  .playerX{
    background-color: green;
  }

  .playerY{
    background-color: red;
  }
  `,
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | null = null;
}
