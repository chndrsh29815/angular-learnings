# Output and EventEmitter
@Output decorator is used to output something out of the component. Basically its used in conjuction with EventEmitter which emits the values.

```TS

  @Output() select = new EventEmitter();

  onSelectUser() {
    this.select.emit(this.id)
  }

```