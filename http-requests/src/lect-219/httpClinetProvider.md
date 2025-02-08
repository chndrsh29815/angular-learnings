# httpClient service and its provider

```TS
import { HttpClient } from '@angular/common/http';

export class AvailablePlacesComponent implements OnInit{
  places = signal<Place[] | undefined>(undefined);
  private httpClient = inject(HttpClient)

  ngOnInit(): void {
    this.httpClient.get<{places: Place[]}>("http://localhost:3000/places").subscribe({
      next: (resData) => {
        console.log(resData.places)
      }
    })
  }
}
```

```TS
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()],
}).catch((err) => console.error(err));
```