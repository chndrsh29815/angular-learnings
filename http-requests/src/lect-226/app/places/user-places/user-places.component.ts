import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { HttpClient } from '@angular/common/http';
import { Place } from '../place.model';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit{
  places = signal<Place[] | undefined>(undefined);
    isFecting = signal(false);
    error = signal('');
    private httpClient = inject(HttpClient)
    private destroyRef = inject(DestroyRef);
  
    ngOnInit(): void {
      this.isFecting.set(true)
      const subscription = this.httpClient.get<{places: Place[]}>("http://localhost:3000/user-places").pipe(
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
  
}
