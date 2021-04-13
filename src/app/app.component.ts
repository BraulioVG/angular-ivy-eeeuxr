import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Contador de 5 ' ;
  num:number = 10;
  title: String = "Contador basico"
base: number = 5;

  

  contador(valor: number){
    this.num+=valor;

  }

  

 
}
