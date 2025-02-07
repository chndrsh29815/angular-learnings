import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit{
  places = signal<Place[] | undefined>(undefined);
  isFecting = signal(false);
  error = signal('');
  private httpClient = inject(HttpClient)
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.isFecting.set(true)
    const subscription = this.httpClient.get<{places: Place[]}>("http://localhost:3000/places").pipe(
      map((resData) => {
        return resData.places
      }),
      catchError((error)=> {
        return throwError(() => new Error("something went wrong. please try again later."))
      })
    ).subscribe({
      next: (places) => {
        this.places.set(places);
      },
      complete: () => {
        this.isFecting.set(false);
      },
      error: (error: Error)=> {
        console.log(error);
        this.error.set(error.message)
      }
    })

    this.destroyRef.onDestroy(()=> {
      subscription.unsubscribe()
    })
  }

  onSelectPlaces(selectedPlace: Place) {
    this.httpClient.put("http://localhost:3000/user-places", {
      placeId: selectedPlace.id
    }).subscribe({
      complete: () => {
        console.log("user places submitted")
      }
    })
  }
}
