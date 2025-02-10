import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { UsersService } from '../users.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
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

export const userNameResolver: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerStat: RouterStateSnapshot
) => {
  const userService  = inject(UsersService)
  const userName = userService.users.find((u) => u.id === activatedRoute.paramMap.get('userId'))
  ?.name || '';
  return userName;
};

export const titleResolver: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerStat: RouterStateSnapshot
) => {
  
  return userNameResolver(activatedRoute, routerStat) + ' tasks';
};
