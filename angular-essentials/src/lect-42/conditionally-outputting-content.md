# @if else syntax

```TS
  @if (selectedUser) {
    <app-tasks [name]="selectedUser.name" />
  } @else {
    <p id="fallback">Please select user to see their tasks!</p>
  }
```