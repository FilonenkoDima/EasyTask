import { Component, inject, } from '@angular/core';

import { UserComponent } from ;
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UserComponent {
  private userService = inject(UsersService);
  users = this.userService.users;
}
