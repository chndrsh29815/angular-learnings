# class binding 
we use property binding like usual around class property like below.
```TS
<div>
  <button [class.active]="selected" (click)="onSelectUser()">
    <img
      [src]="imagePath"
      [alt]="user.name"
    />
    <p>{{ user.name }}</p>
  </button>
</div>

```