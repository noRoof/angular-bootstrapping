import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

type MenuLink = {
  label: string;
  url: string;
  isActive: boolean;
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent, MatSidenavModule, MatListModule, MatIconModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {

  links: MenuLink[] = [];
  @ViewChild('sideNav') sideNav: MatSidenav | undefined;

  constructor(private router: Router) {}
  ngOnInit(){
    this.links = [{
      label: 'Example List',
      url: '/examples',
      isActive: false,
    }];
  }

  menuClicked(link: string){
    this.sideNav?.toggle()
    this.router.navigate([link]);
  }
}
