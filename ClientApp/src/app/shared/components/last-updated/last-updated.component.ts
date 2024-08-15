import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-last-updated',
  templateUrl: './last-updated.component.html',
  styleUrls: ['./last-updated.component.css'],
})
export class LastUpdatedComponent {
  @Input() dateIssued: string | null = null;
}
