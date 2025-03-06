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
  nameError : string = "";

  onClick($event:MouseEvent){
    console.log("logo" , $event)
    window.open(this.url, "_blank");
  }

  onInput($event:any){
    console.log("change Event Occured" , $event.data);
    const Regex = RegExp('^[A-Z][a-zA-Z\\s]{2, }$');

    if (this.UserName.trim() === "") {
      this.nameError = "";  // No error message for empty input
      return;
    }
    
    if(Regex.test(this.UserName)){
      this.nameError ="";
      return;
    }
    else{
    this.nameError = "Name is incorrect"
    }
  }
}
