import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


 produtos = [ {nome: "Mochila", preco: 100.50 },
              {nome: "Caderno", preco: 11.50 },
              {nome: "Caneta", preco:  2.50 } ]

}
