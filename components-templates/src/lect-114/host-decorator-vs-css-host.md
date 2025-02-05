# decorator host property vs host css property
decorator host property will append the css classes to host element but as component specific css classes are scoped those properties must be in markup to be effective. as host element usually not defined in markup therefor those properties in css not take effect. 

two ways to solve above situation
1. enable encapsulations setting to be none.
2. define css host property: as css host property target the host element which renders them, the direct link will be there so these properties will take effect.

```CSS
.dashboard-item {
      display: block;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    background-color: #f8f8f8;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
}


:host {
    display: block;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    background-color: #f8f8f8;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  }

```

In above case earlier div element was there in markup to target .dashboard-item css property.
we have removed that extra div and target the host element with host property.

