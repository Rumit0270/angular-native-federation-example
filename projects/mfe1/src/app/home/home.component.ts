import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import {
  LogLibService,
  SharedLibModule,
} from 'projects/shared-lib/src/public-api';

@Component({
  selector: 'app-home',
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
