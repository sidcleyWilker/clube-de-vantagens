import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  listaFiltrada: any;

  transform(lista: any[], texto: string): any {
    
    if (texto === ''){
      return lista;
      
    }else {
      texto = texto.toLowerCase();
      this.listaFiltrada = lista.filter(item => {
        return item.loja.nome.toLowerCase().includes( texto );
      });
      console.log(this.listaFiltrada);
      return this.listaFiltrada;
  }
    
  }

}
