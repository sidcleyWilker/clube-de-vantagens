import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.page.html',
  styleUrls: ['./lojas.page.scss'],
})
export class LojasPage implements OnInit {


  nome: any = "";

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const categoria = this.route.snapshot.queryParamMap.get('categoria');
    this.nome = categoria;
    console.log(categoria)
  }

}
