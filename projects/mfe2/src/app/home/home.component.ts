import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LogLibService } from 'projects/shared-lib/src/public-api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent {
  _router = inject(Router);
  _route = inject(ActivatedRoute);
  _logLibService = inject(LogLibService);

  handleClick() {
    this._logLibService.log('Loading details...');
    this._router.navigate(['details'], { relativeTo: this._route });
  }
}
