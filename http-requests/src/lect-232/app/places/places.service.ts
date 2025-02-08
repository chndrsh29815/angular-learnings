import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private httpClient = inject(HttpClient);
  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/places',
      'something went wrong while fetching available places. please try again later.'
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/user-places',
      'something went wrong while your favourite available places. please try again later.'
    ).pipe(tap((userPlaces)=> {
      this.userPlaces.set(userPlaces);
    }));
  }

  addPlaceToUserPlaces(place: Place) {
    this.userPlaces.update(prevPlaces => [...prevPlaces, place])
    return this.httpClient.put("http://localhost:3000/user-places", {
      placeId: place
    })
  }

  removeUserPlace(place: Place) {}

  private fetchPlaces(url: string, errorMsg: string) {
    return this.httpClient.get<{ places: Place[] }>(url).pipe(
      map((resData) => {
        return resData.places;
      }),
      catchError((error) => {
        return throwError(() => new Error(errorMsg));
      })
    );
  }
}
