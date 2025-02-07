# observe property on http requests
we can set observe property to get result in HttpRespose type like below.
```TS
export class AvailablePlacesComponent implements OnInit{
  places = signal<Place[] | undefined>(undefined);
  private httpClient = inject(HttpClient)

  ngOnInit(): void {
    this.httpClient.get<{places: Place[]}>("http://localhost:3000/places", {
      observe: 'response'
    }).subscribe({
      next: (response) => {
        console.log(response.body?.places)
      }
    })
  }
}

```