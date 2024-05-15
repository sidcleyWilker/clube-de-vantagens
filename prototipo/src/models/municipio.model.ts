import { Loja } from './loja.model';

export interface Municipio {
    nomeMunicipio: string,
    iconeMunicipio: string,
    lojas: Loja[]
}