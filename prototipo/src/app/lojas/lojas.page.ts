import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataBase } from 'src/data-base-teste/database';

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.page.html',
  styleUrls: ['./lojas.page.scss'],
})
export class LojasPage implements OnInit {

  isModalOpen = false;
  loja: any;
  dataBase: DataBase = new DataBase();
  isCategoria = false;
  textoBuscar = '';
  tes: any = null;

  constructor(private router: Router, private route: ActivatedRoute) { }

  setOpen(isOpen: boolean, nomeLoja?: string) {
    this.isModalOpen = isOpen;
    if (nomeLoja) {
      this.loja = this.dataBase.buscarLoja(nomeLoja);
    }
  }

  ngOnInit() {
    const stateTeste = this.router.getCurrentNavigation()?.extras.state;
    this.tes = stateTeste;
    const obj = JSON.stringify(this.tes);

    if (obj[2] === "m") {
      this.isCategoria = false;
    } else {
      this.isCategoria = true;
    }

  }

  buscar(event: any) {
    this.textoBuscar = event.detail.value;
  }



}
