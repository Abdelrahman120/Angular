import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  username : string = 'Ahmed';
  age: number = 19;
  profile_pic :string = 'https://static.vecteezy.com/system/resources/previews/004/819/327/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg'
  user = {
    name : 'Omar',
    age: 26,
    title : 'Fullstack developer',
    is_admin: false
  }


  handleAlert(name : string) {
    alert(name)
  }
}
