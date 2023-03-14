import { AuthService } from "./../services/auth.service";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  constructor(private router: Router, private auth: AuthService) {}
  goToHome() {
    this.router.navigate(["home"]);
  }

  logout() {
    this.auth.logout();
  }
}
