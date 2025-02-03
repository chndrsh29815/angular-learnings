# NgIf and NgFor syntax
1. this was used in legacy project.
2. package *@angular/common*

```TS
 <ul id="users">
    <li *ngFor="let user of users">
      <app-user [user]="user" (select)="onSelectUser($event)" />
    </li>
  </ul>
  <app-tasks *ngIf="selectedUser; else fallback" [name]="selectedUser.name" />
  <ng-template #fallback>
    <p id="fallback">Please select user to see their tasks!</p>
  </ng-template>
```