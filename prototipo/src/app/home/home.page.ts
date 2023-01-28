import { Loja } from './../../models/loja.model';
import { Categoria } from './../../models/categoria.model';
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DataBase } from 'src/data-base-teste/database';
import { Municipio } from 'src/models/municipio.model';

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
   isModalOpen = false;
   loja: any;
   textoBuscar = '';
   categorias: Categoria[] = [];
   dataBase: DataBase = new DataBase();
   municipios: Municipio[] = [];
   lojas: Loja[] = [];

  constructor(
    private router: Router,
    
    ) {
      this.categorias = this.dataBase.categorias;
      this.municipios = this.dataBase.municipios;
      this.lojas = this.dataBase.lojas;
    }

    setOpen(isOpen: boolean, nomeLoja?: string) {
      this.isModalOpen = isOpen;
      if (nomeLoja){
        this.loja = this.dataBase.buscarLoja(nomeLoja);
      }
    }
  
    listarLojasPorCategoria(categoria: Categoria){
      const params: NavigationExtras = {
        state: {
          catego: categoria
        }
      }
      this.router.navigate(['/lojas'], params)
    }

    listarLojasPorMunicipio(municipio: Municipio){
      const params: NavigationExtras = {
        state: {
          muni: municipio
        }
      }
      this.router.navigate(['/lojas'], params)
    }

    buscar(event:any){
      this.textoBuscar = event.detail.value;
    }

}
