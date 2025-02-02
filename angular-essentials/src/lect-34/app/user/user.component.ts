import { Component, input, Input, output } from '@angular/core';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  id = input.required<string>();
  avatar = input.required<string>()
  name = input.required<string>()

  select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id());
  }

}
