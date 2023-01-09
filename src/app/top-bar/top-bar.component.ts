import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {}
user:any
  ngOnInit(): void {
    this.user=localStorage.getItem('username')
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  logout() {
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    this.router.navigate(['/login']);
  }
}
