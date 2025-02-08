# Tap rxJS
1. Tap is designed to allow the developer a designated place to perform side effects.
2. It will return an observable.

# map rxJS vs tap rxJs
The map operator will simply apply a function to that data and return the result.
The tap operator however takes a data, apply a function to that data but returns the original data, if the function bothered to return a result, tap just ignores it.

# catchError with throError

```TS
  loadUserPlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/user-places',
      'something went wrong while your favourite available places. please try again later.'
    ).pipe(tap((userPlaces)=> {
      this.userPlaces.set(userPlaces);
    }));
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlaces();
    if(!prevPlaces.some(p=> p.id === place.id)) {
      this.userPlaces.set([...prevPlaces, place]);
    }
    return this.httpClient.put("http://localhost:3000/user-places", {
      placeId: place.id
    }).pipe(
      catchError((error) => {
        this.userPlaces.set(prevPlaces)
        return throwError(() => {
          new Error("failed to update the user places.")
        }) 
      })
    )
  }
```
 