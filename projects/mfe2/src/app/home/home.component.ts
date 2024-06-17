import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Note: This mapping is defined in root tsconfig.json.
// So, you NEED to import from 'shared-lib` to share the same instance between MFEs.
import { LogLibService } from 'shared-lib';

@Component({
  selector: 'mfe2-home',
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
