import { Loja } from './loja.model';

export interface Categoria {
    nomeCategoria: string,
    iconeCategoria: string,
    lojas: Loja[]
}