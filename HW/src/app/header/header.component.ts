import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //@ViewChild("teste") produtos: ElementRef;
  pesquisar:any;

  constructor() { }

  ngOnInit(): void {
  }
  public validarPesquisa()
  {
    this.pesquisar = true;
  }
}
