# @for syntax
```TS
    @for (user of users; track user.id) {
      <li>
        <app-user [user]="users[0]" (select)="onSelectUser($event)" />
      </li>
    }

```

# What is the @for tracking function?

The tracking function created via the track statement is used to make it easy for the Angular change detection mechanism to know exactly what items to update in the DOM after the input array changes.

The tracking function tells Angular how to uniquely identify an element of the list.

For example, if just one element was added to a list of 100, we want Angular to be able to just append that new element to the DOM, without having to re-render all the other elements unnecessarily.

That is just one example of the kind of optimizations that the tracking function enables.

To be effective, the tracking function should identify something unique about the element in the list.

If there isn't anything unique about the element, then the tracking function should return the index of the element in the array