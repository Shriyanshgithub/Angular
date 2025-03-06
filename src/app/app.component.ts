import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  imgUrl = '/assets/BL_logo_square_jpg.jpg';
  url ="https://www.bridgeLabz.com";
  title = 'Hello From BridgeLabz';
  UserName :string = "";

  onClick($event:MouseEvent){
    console.log("logo" , $event)
    window.open(this.url, "_blank");
  }
}
