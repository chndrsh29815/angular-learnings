# isFetching used to display fallback status

```TS

export class AvailablePlacesComponent implements OnInit{
  places = signal<Place[] | undefined>(undefined);
  isFecting = signal(false);
  private httpClient = inject(HttpClient)
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.isFecting.set(true)
    const subscription = this.httpClient.get<{places: Place[]}>("http://localhost:3000/places").pipe(
      map((resData) => {
        return resData.places
      })
    ).subscribe({
      next: (places) => {
        this.places.set(places);
      },
      complete: () => {
        this.isFecting.set(false);
      }
    })

    this.destroyRef.onDestroy(()=> {
      subscription.unsubscribe()
    })
  }
}

```