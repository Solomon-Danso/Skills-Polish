import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChampionServiceService {

  constructor() { }

rollCall = (qty: number) =>{
  alert(qty)
}



}
