export interface Endereco {
    cep: string,
    complemento?: string,
    bairro: string,
    cidade: string,
    estado: string,
    numero: string,
    uf: string,
    comoChegar?: string
}