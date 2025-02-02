# ng-content
ng-content is used to display content which is wrapped around. like children property in React.

```TS
card.component.html
<div>
    <ng-content></ng-content>
</div>

user.component.html
<app-card>
  <button [class.active]="selected" (click)="onSelectUser()">
    <img
      [src]="imagePath"
      [alt]="user.name"
    />
    <p>{{ user.name }}</p>
  </button>
</app-card>


```