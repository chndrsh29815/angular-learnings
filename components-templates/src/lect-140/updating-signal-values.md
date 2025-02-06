# sinal update function

```TS

export class TicketComponent {
 data = input.required<Ticket>();
 detailsVisible = signal(false);

 onToggleDetails() {
  this.detailsVisible.update(wasVisible => !wasVisible);
 }
}
```