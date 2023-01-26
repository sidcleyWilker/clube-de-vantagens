import { Loja } from './../../models/loja.model';
import { Categoria } from './../../models/categoria.model';
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DataBase } from 'src/data-base-teste/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {


  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
   };

  constructor(private router: Router) {
  
    categorias: Categoria[] = [];
    dataBase: DataBase = new DataBase();
  
  }

  constructor(
    private router: Router,
    
    ) {
      this.categorias = this.dataBase.categorias;
      console.log(this.categorias)
    }

  
    listarLojas(categoria: Categoria){
      const params: NavigationExtras = {
        state: {
          catego: categoria
        }
      }
      this.router.navigate(['/lojas'], params)
    }

}
