# anchor tags with links

below leads to refetching all the files from the server and will leads to undesired behaviour.
```TS
 <a href="/tasks">
    <img [src]="imagePath()" [alt]="user().name" />
    <span>{{ user().name }}</span>
  </a>
```

instead we should use routerLink.
this tag will tells angular to take over the anchor tag and disable the default behaviour.
```TS
<div>
  <a routerLink="/tasks">
    <img [src]="imagePath()" [alt]="user().name" />
    <span>{{ user().name }}</span>
  </a>
</div>
```