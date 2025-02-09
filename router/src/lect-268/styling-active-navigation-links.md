# routerLinkActive
it takes css class to render that when link is active 

```TS
<div>
  <a routerLink="/tasks" routerLinkActive="selected">
    <img [src]="imagePath()" [alt]="user().name" />
    <span>{{ user().name }}</span>
  </a>
</div>

```