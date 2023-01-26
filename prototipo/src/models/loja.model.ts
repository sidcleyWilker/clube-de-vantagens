import { Endereco } from './endereco.model';
import { Categoria } from './categoria.model';

export interface Loja {
    nome: string,
    foto: string,
    telefoneFixo?: string,
    whatsApp?: string,
    endereco: Endereco,
    desconto: number,
    categoria?: Categoria,
}