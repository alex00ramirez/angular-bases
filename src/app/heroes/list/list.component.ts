import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames : string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deleteHero?: string;

  removeLastHero() : void
  {
    // Elimina el último elemento del array
    this.deleteHero = this.heroNames.pop();
  }
}
