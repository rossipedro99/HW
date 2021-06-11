import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {
 @Input() produtos: any;

  constructor() { }

  ngOnInit(): void {
  }

  public teste() {
    console.log(this.produtos);
  }

}
