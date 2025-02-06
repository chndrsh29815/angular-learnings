# @for-@empty syntax

```TS
  @for(ticket of tickets; track ticket.id) {
      <li>
        <app-ticket/> {{$fisrt}} {{$last}} {{$count}} {{$even}} {{$odd}}
      </li>
    } @empty {
      <p>No tickets available!</p>
    }
```