import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  headerName="Started learning Angular!";
  salary = .45;
  isDisabled = false;

  colorName="red";
  styleatt = {"color":"yellow","font-size":"50px"}
  colors=['blue','orange','white','red'];


  className="headerClass";

  FunctionTest(name:string){
    alert(name);
  }
}
