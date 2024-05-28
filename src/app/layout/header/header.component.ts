import { Component, output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router, private snackBar: MatSnackBar) {}

  onMenuToggle = output<void>();

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  goToProfile() {
    this.snackBar.open('Profile not implemented', undefined, {duration: 2000})
  }
}
