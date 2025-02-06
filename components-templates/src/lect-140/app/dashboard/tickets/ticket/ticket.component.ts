import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
 data = input.required<Ticket>();
 closeTicket = output();
 detailsVisible = signal(false);

 onToggleDetails() {
  this.detailsVisible.update(wasVisible => !wasVisible);
 }

 onCloseTicket() {
  this.closeTicket.emit();
 }

}
