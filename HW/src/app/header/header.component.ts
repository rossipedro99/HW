import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isMouseOverHome: boolean = false;
  isMouseOverSobre: boolean = false;
  isMouseOverProduto: boolean = false;
  isMouseOverContato: boolean = false;
  isMouseOverLoginCadastro: boolean = false;
  isMouseOver:boolean = false;
  isMouseOverCarrinho:boolean = false;
  constructor() { }

  onMouseOverOutHome()
  {
    this.isMouseOverHome = !this.isMouseOverHome;
  }
  onMouseOverOutSobre()
  {
    this.isMouseOverSobre = !this.isMouseOverSobre;
  }
  onMouseOverOutProduto()
  {
    this.isMouseOverProduto = !this.isMouseOverProduto;
  }
  onMouseOverOutContato()
  {
    this.isMouseOverContato = !this.isMouseOverContato;
  }
  onMouseOverOutLoginCadastro()
  {
    this.isMouseOverLoginCadastro = !this.isMouseOverLoginCadastro;
  }
  onMouseOverOutCarrinho()
  {
    this.isMouseOverCarrinho = !this.isMouseOverCarrinho;
  }

  ngOnInit(): void {
  }

}
