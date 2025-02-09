# through activatedRoute access Data in components.

```TS
export class UserTasksComponent implements OnInit{
  // userId = input.required<string>();
  userName = input.required<string>();
  message = input.required<string>();
  private activatedRoute = inject(ActivatedRoute)
  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: (data) => {
        console.log(data);
      }
    })
  }
 
}
```