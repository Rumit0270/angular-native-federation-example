import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { LogLibService, SharedLibModule } from 'shared-lib';

@Component({
  selector: 'mfe1-home',
  standalone: true,
  imports: [RouterModule, SharedLibModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent {
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);
  private _logLibService = inject(LogLibService);

  handleClick() {
    this._logLibService.log('Loading todos...');
    this._router.navigate(['todos'], { relativeTo: this._route });
  }
}
