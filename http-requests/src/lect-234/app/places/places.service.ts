import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';
import { ErrorService } from '../../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private httpClient = inject(HttpClient);
  private errorService = inject(ErrorService)
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
    const prevPlaces = this.userPlaces();
    if(!prevPlaces.some(p=> p.id === place.id)) {
      this.userPlaces.set([...prevPlaces, place]);
    }
    return this.httpClient.put("http://localhost:3000/user-places", {
      placeId: place.id
    }).pipe(
      catchError((error) => {
        this.userPlaces.set(prevPlaces);
        this.errorService.showError("failed to update the user places.");
        return throwError(() => {
          new Error("failed to update the user places.")
        }) 
      })
    )
  }

  removeUserPlace(place: Place) {
    const prevPlaces = this.userPlaces();
    if(prevPlaces.some(p=> p.id === place.id)) {
      this.userPlaces.set(prevPlaces.filter(p=> p.id !== place.id));
    }
    return this.httpClient.delete("http://localhost:3000/user-places/" + place.id).pipe(
      catchError((error) => {
        this.userPlaces.set(prevPlaces);
        this.errorService.showError("failed to remove the user places.");
        return throwError(() => {
          new Error("failed to remove the user places.")
        }) 
      })
    )
  }

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
