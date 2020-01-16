import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private authService: AuthService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  logout() {
    this.authService.doLogout().then(res => {
      this.navCtrl.navigateBack('/home');
    }, err => {
      console.log(err);
    });
  }
}
