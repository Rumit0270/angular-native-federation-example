import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[lib-button]',
  templateUrl: './button.component.html',
  styles: [
    `
      .lib-button {
        padding: 8px;
        border-radius: 4px;
        background-color: #007bff;
        color: white;
        border: none;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @HostBinding('class') classes = 'lib-button';
}
