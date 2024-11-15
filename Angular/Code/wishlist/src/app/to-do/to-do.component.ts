import { Component, Inject } from '@angular/core';
import { ChampionServiceService } from '../champion-service.service';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  fullName = "Solomon ToDo";
  formIsInvalid = false;
  isAdmin = false;

  ingredientList = [
    {name: 'noodles', quantity: 1},
    {name: 'miso broth', quantity: 1},
    {name: 'egg', quantity: 2},
  ];


 soloFunction = (hey:any) =>{
alert(hey)

  }

  constructor(private rollCaller: ChampionServiceService) {}

  quantity = (qty:number) =>{
    this.rollCaller.rollCall(qty)
  }


}
