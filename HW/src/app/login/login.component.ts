import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  emailLogin:string ='';
  senhaLogin:string ='';
  emailCadastro:string='';
  senhaCadastro:string='';
  confirmaSenha:string='';
  user:string='';
  termosDeUso:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  termosAceito()
  {
    this.termosDeUso = !this.termosDeUso;
  }
  limparEmailLogin()
  {
    this.emailLogin = '';
  }
}
