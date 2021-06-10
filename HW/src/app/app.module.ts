import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule} from '@angular/material/icon';
import { HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CategoriasComponent } from './categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SearchComponent,
    HomeComponent,
    ListaProdutoComponent,
    DetalheProdutoComponent,
    CadastroProdutoComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
