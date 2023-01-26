import { Categoria } from './../../models/categoria.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.page.html',
  styleUrls: ['./lojas.page.scss'],
})
export class LojasPage implements OnInit {

  textoBuscar = '';
  tes: any = null;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const stateTeste = this.router.getCurrentNavigation()?.extras.state;
    this.tes = stateTeste;
  }

  buscar(event:any){
    this.textoBuscar = event.detail.value;
  }

}
