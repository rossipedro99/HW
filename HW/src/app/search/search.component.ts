import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  isMouseOverProcessador:boolean = false;
  isMouseOverPlacaVideo:boolean = false;
  isMouseOverMonitor:boolean = false;
  isMouseOverFonte:boolean = false;
  isMouseOverMais:boolean = false;

  onMouseOverOutProcessador()
  {
    this.isMouseOverProcessador = !this.isMouseOverProcessador;
  }
  onMouseOverOutPlacaVideo()
  {
    this.isMouseOverPlacaVideo = !this.isMouseOverPlacaVideo;
  }
  onMouseOverOutMonitor()
  {
    this.isMouseOverMonitor = !this.isMouseOverMonitor;
  }
  onMouseOverOutFonte()
  {
    this.isMouseOverFonte = !this.isMouseOverFonte;
  }
  onMouseOverOutMais()
  {
    this.isMouseOverMais = !this.isMouseOverMais;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
