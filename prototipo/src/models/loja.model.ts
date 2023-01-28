import { Endereco } from './endereco.model';
import { Categoria } from './categoria.model';
import { Municipio } from './municipio.model';

export interface Loja {
    nome: string,
    foto: string,
    telefoneFixo?: string,
    whatsApp?: string,
    endereco: Endereco,
    desconto: number,
    categoria?: Categoria,
    municipio?: Municipio,
    comoChegar?: string,
}