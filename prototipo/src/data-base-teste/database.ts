import { Loja } from './../models/loja.model';
import { Categoria } from './../models/categoria.model';
import { Endereco } from './../models/endereco.model';
import { Municipio } from 'src/models/municipio.model';
export class DataBase {

    municipios: Municipio[] = [];
    categorias: Categoria[] = []
    lojas: Loja[] = []
    enderecos: Endereco[] = []

    constructor() {
        this.preencherCategorias();
        this.cadastrarLoja();
        this.addLojasAsCategorias();
        this.preencherMunicipio();
        this.addLojasAoMunicipio();
    }

    addLojasAsCategorias(): void {
        this.categorias.forEach(cat => {
            cat.lojas = this.lojas;
        });
    }


    preencherCategorias(): void {
        this.categorias.push(this.criarCategoria("medkit-outline", "Saúde"));
        this.categorias.push(this.criarCategoria("headset-outline", "Música"));
        this.categorias.push(this.criarCategoria("storefront-outline", "Mercado"));
        this.categorias.push(this.criarCategoria("barbell-outline", "Academia"));
        this.categorias.push(this.criarCategoria("construct-outline", "Serviços"));
        this.categorias.push(this.criarCategoria("images-outline", "Fotografia"));
        this.categorias.push(this.criarCategoria("library-outline", "Livrarias"));
        this.categorias.push(this.criarCategoria("ticket-outline", "Eventos"));
        this.categorias.push(this.criarCategoria("musical-notes-outline", "Bandas"));
        this.categorias.push(this.criarCategoria("school-outline", "Educação"));
        this.categorias.push(this.criarCategoria("shirt-outline", "Roupas"));
        this.categorias.push(this.criarCategoria("print-outline", "Copiadora"));
    }

    preencherMunicipio(): void {
        this.municipios.push(this.criarMunicipio("business-outline", "Afogados da Ingazeira"));
        this.municipios.push(this.criarMunicipio("business-outline", "Serra Talhada"));
        this.municipios.push(this.criarMunicipio("business-outline", "Arcoverde"));
        this.municipios.push(this.criarMunicipio("business-outline", "São José do Egito"));
        this.municipios.push(this.criarMunicipio("business-outline", "Recife"));
        this.municipios.push(this.criarMunicipio("business-outline", "Tabira"));
        this.municipios.push(this.criarMunicipio("business-outline", "Triunfo"));
        this.municipios.push(this.criarMunicipio("business-outline", "Carnaíba"));
        this.municipios.push(this.criarMunicipio("business-outline", "Flores"));
        this.municipios.push(this.criarMunicipio("business-outline", "Iguaracy"));
        this.municipios.push(this.criarMunicipio("business-outline", "Tuparetama"));
        this.municipios.push(this.criarMunicipio("business-outline", "Quixaba"));
        this.municipios.push(this.criarMunicipio("business-outline", "Ingazeira"));
        this.municipios.push(this.criarMunicipio("business-outline", "Itapetim"));
        this.municipios.push(this.criarMunicipio("business-outline", "Brejinho"));
        this.municipios.push(this.criarMunicipio("business-outline", "Santa Terezinha"));
        this.municipios.push(this.criarMunicipio("business-outline", "Solidão"));
        this.municipios.push(this.criarMunicipio("business-outline", "Santa Cruz da Baixa Verde"));
        this.municipios.push(this.criarMunicipio("business-outline", "Calumbi"));
        this.municipios.push(this.criarMunicipio("business-outline", "Sertânia"));
    }

    addLojasAoMunicipio(): void{
        this.lojas.forEach(element => {
            switch (element.municipio?.nomeMunicipio) {
                case "Afogados da Ingazeira":
                    this.municipios.forEach(mu => {
                        if (mu.nomeMunicipio === "Afogados da Ingazeira") {
                            mu.lojas.push(element);
                        }
                    });
                    break;
                case "São José do Egito":
                    this.municipios.forEach(mu => {
                        if (mu.nomeMunicipio === "São José do Egito") {
                            mu.lojas.push(element);
                        }
                    });
                    break;

                case "Tabira":
                    this.municipios.forEach(mu => {
                        if (mu.nomeMunicipio === "Tabira") {
                            mu.lojas.push(element);
                        }
                    });
                    break;
                case "Iguaracy - PE":
                    this.municipios.forEach(mu => {
                        if (mu.nomeMunicipio === "Iguaracy") {
                            mu.lojas.push(element);
                        }
                    });
                    break;

                case "Tuparetama":
                    this.municipios.forEach(mu => {
                        if (mu.nomeMunicipio === "Tuparetama") {
                            mu.lojas.push(element);
                        }
                    });
                    break;
            }

        });
    }

    criarCategoria(icone: string, nome: string): Categoria {
        return {
            nomeCategoria: nome,
            iconeCategoria: icone,
            lojas: []
        };
    }

    criarMunicipio(icone: string, nome: string): Municipio {
        return {
            nomeMunicipio: nome,
            iconeMunicipio: icone,
            lojas: []
        }
    }

    //nome: string, foto: string, endereco: Endereco, desconto: number, categoria: Categoria
    cadastrarLoja(): void {
        this.lojas.push(this.criarLoja("Americanas Express",
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAwFBMVEX4ADL////4ACf5ACD3AC/3fI31aHz0oa33MlP8///2e4n5AC754ef87/D2ACP4pLP1ADT76u74ACv2ABnyAC7xACL2ABb27/DzLUr1ADL7AC/0ABz1///7+fr0maf2dIX+7vDzXHXzVm/zg5L0srz2xMz41N383ef4vsbuRFz0Hz3419r2rrLykZ/23+HzjJfsSmH0PVr1IUf3yNHviJz2AAr3r7zxtMP2cof0f5Tyy8zzytbw4uXyZXzyUmbyjZ97Lgl1AAAGK0lEQVR4nO2dbVfiOBSASxIpsZitaaFALQxgkbei4Djjjo7+/381hZldd+EGCtMzSTj3+YRYz8ljQpPce1McB0EQBEEQBEEQBEEQBEEQBEEQBEGQPw0pE90yEO3qRXn0mG4dAHZdKY+EtHX77MLqJRp+Erp1ADw0PIYrNNQBGqIhGuoHDdEQDfWDhmiIhvpBQ/sNS45i6NaB6FdLxNNtAyFLDCZK3TIIgiAIgiDIWdLO9x4bOqzT6TCn47QNTIGejieJoFQQGbZ93w+lJDTOfzIxk30CjFDWGgxv01H9qlLhm93f9d3L2H2eTImQnuWaHm0sh2k94Zxv73Hzd6LZvNqiwsitYDFk0MoWyf7NfDS6rwVGbugPI58e0srNbudtdyXno+dY2DdYmVi+FA/LRNmUWjZYpe8e6r3/d2WS+VaNVbFcHOO3cXwdUN3NLk5cTY4VXH8i3wNLPo2MXh7vt3F0A91tLwZ5Pk0wp2vFQCUPJwtWeNXEaP42jehkwXzamJr/UWzOj5omtjvRbegWOIR8+w2/teLK9Jm/MfpNQ9fwmw3p/5Zfbhg1dTvsRzzuaTyvXNfv6p82ryvKrp4YnXfyaoqGc37t9ldhvtcnRE6Xw9tIeT/qGj1hkAxsN+ezfpNK5rD1XMCYR2gwSBWOj0YvbMQMNuw2djYOstmDDa9iHS0vCPPhRn8Gl9QxrJisDJ70ZRUed004ckjh29LS4BlRuFCvJKpJnID/EN43+GYagIGLuerm6K3AJWzP4M1+ALWYv6n6hIElOPzCXEMWAoOUvypvHJ0GVEbFL8019FrASoXfKu/+rA32ocmGyyTaIRkqG+xNoHCxyYbOOu+yg/py+gUQNNvw56qs6LVBFV4AGW1YHEae7uGF6RkYsg6hwn9WlaNaa5iPX7bJlMas9fY5VYer7DT0ZG4W+63BZTafLa6UdjYatqWIm3Jy0f0yurpKNlv7A7E4mwzzna4IH7Kv10AK2H7DdseLnUl3tGlzcT2LDGVj4tYPZoDtNSSiB8czzsTQCwaL00P7FhiK6fhUOzsM44E6FnoWhrR3U9jFxnVpOxgW7L91Ic3XT/YZ0ueiI5TfjJcN2/b4+RJtsifl8tF7FZ4suq2Y+NYZOrJAGU3y+s3ttWLqOcw+QwpGhH+J5Z+7ZDR+79ecmJJNjNg+Q7ZSC3KeZpOppIJ0/o102GcY3Kr0knE/DsR2UbB1ht5UUUvK56sAintbZ0guYL9oEChSM7YZKpJl0VLVYja1bMZfgUed+YMyL++1wEyOsYbyDRScq9Py6/WBTYbib9Cwpj45AqeMDTaE5gpef9rzF5ldhvQb1N7bPbUjDfAvzDWUI6i9rrr+h03BwLfBhjOovXsqnBS1xOYahndH9mEMlzGaawg/3fOLspiSPEDXm2xIoD7kL6piSkZfbTNsgHeaRFHVzGIwxb3GWMMYWpZy3iNQ5tsTXeVe0lhDCu8OX8NdwzZpq4PG5lYMkSHc4tvm9t6JPH2P9kQDjDUMVVX6qU8/9r9MCtnfm7Ux19CZXisaHg2n64PNkhARsElW3x9w5OoSI92At5qfjY7S+16///0i+1Y/HG78bGyht4CjGBvFn5FwXiBeXOHvxhoyf3+RRUF4Zqxhm6rnOJUN9N6epax2/COPrXEXiD/y1OBzQfTyuOPNvRYUYV2Y/AyCOD2mcKZKfcgwqRl8HMELF4X9oomAC8MrmcHD1JEtKMgLMVsR1RSaPJisSFqFCk34PFyv5KgL/jbpmXz2SYYvhxWv3ui6HNORPXjC4Cm45zIEFmQ3+xee3A1/LT2ZVFxp5BNaP6C1VL06y/un9jEGm4/whZHZhg6LB6kilxiNJ/89yCYHf4F0DR6kG/JdYC2brUtm/umizevo8WK19ZQWT8BoavhRCLGquundr76MRuP7iR+Lju5mlUrek0GzGcgwbDSbTbqTxz8X/PVj2pyzejobgiAIgiAIgmikTWh5GPk8U/bulkf3mHPvfwqvzG/SMTJOc/7fhoSGaIiG+kFDNERD/aAhGqKhftAQDdFQP+dv2Cn1+4BNNHRqZaJbBoSViMEVpgiCIAiCIAiCIAiCIAiCIAiCIAiCIIhGfgDeUoZEXUgLlAAAAABJRU5ErkJggg==",
            20, this.criarMunicipio("", "Tuparetama"), "https://goo.gl/maps/cNDjtrudYkwnR8kY6"
        ));

        this.lojas.push(this.criarLoja("Magazine Luiza",
            "https://storage.googleapis.com/lemon-sellers/7a58aba8-6a67-40a3-b483-3aa3e8fa139a_Store_Seller_Profile_20221229_102506_736124085735860901.jpeg",
            22, this.criarMunicipio("", "Afogados da Ingazeira"), "https://goo.gl/maps/cNDjtrudYkwnR8kY6"
        ));

        this.lojas.push(this.criarLoja("Ponto Frio",
            "https://img.ibxk.com.br/2016/4/programas/9051012161233751.png",
            15, this.criarMunicipio("", "São José do Egito"), "https://goo.gl/maps/cNDjtrudYkwnR8kY6"));


        this.lojas.push(this.criarLoja("Ponto Frio",
            "https://img.ibxk.com.br/2016/4/programas/9051012161233751.png",
            15, this.criarMunicipio("", "Tuparetama"), "https://goo.gl/maps/cNDjtrudYkwnR8kY6"
        ));

        this.lojas.push(this.criarLoja("Casas Bahia",
            "data:image/png;base64,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",
            17, this.criarMunicipio("", "Tuparetama"), "https://goo.gl/maps/cNDjtrudYkwnR8kY6"
        ));

        this.lojas.push(this.criarLoja("A C Closet",
            "https://i.pinimg.com/originals/93/eb/f5/93ebf5c2fe5bf008357547863b7ac369.jpg",
            5, this.criarMunicipio("", "São José do Egito"), "https://goo.gl/maps/cNDjtrudYkwnR8kY6"
        ));

        this.lojas.push(this.criarLoja("C&A",
            "data:image/png;base64,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",
            7, this.criarMunicipio("", "Afogados da Ingazeira"), "https://goo.gl/maps/cNDjtrudYkwnR8kY6"
        ));

        this.lojas.push(this.criarLoja("Marisa",
            "https://www.vitoriaparkshopping.com/wp-content/uploads/2016/12/logo_site-13.png",
            10, this.criarMunicipio("", "Afogados da Ingazeira"), "https://goo.gl/maps/cNDjtrudYkwnR8kY6"
        ));

        this.lojas.push(this.criarLoja("Mesbla",
            "https://raichu-uploads.s3.amazonaws.com/logo_mesbla-com_JdL6uQ.png",
            6, this.criarMunicipio("", "Afogados da Ingazeira"), "https://goo.gl/maps/cNDjtrudYkwnR8kY6"
        ));

        this.lojas.push(this.criarLoja("Padaria São João",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaDYL6MV40ggP3WAQDQNgKRWFU0kUC4NsknXam-IqzXaxFK-1qA-Lbo07ZoDWcjXyOrEc&usqp=CAU",
            4, this.criarMunicipio("", "Tabira"), "https://goo.gl/maps/cNDjtrudYkwnR8kY6"
        ));

        this.lojas.push(this.criarLoja("Mesbla",
            "https://raichu-uploads.s3.amazonaws.com/logo_mesbla-com_JdL6uQ.png",
            8, this.criarMunicipio("", "Tabira"), "https://goo.gl/maps/cNDjtrudYkwnR8kY6"
        ));

        this.lojas.push(this.criarLoja("Posto da Cidade",
            "https://img.freepik.com/vetores-premium/logotipo-do-posto-de-gasolina-com-conceito-unico_11481-1003.jpg?w=2000",
            90, this.criarMunicipio("", "Tabira"), "https://goo.gl/maps/cNDjtrudYkwnR8kY6"
        ));
    }


    criarLoja(nome: string, foto: string, desconto: number, municipio?: Municipio, chegar?: string): Loja {
        return {
            nome: nome,
            foto: foto,
            telefoneFixo: "3844-6225",
            whatsApp: "+5587958743257",
            endereco: this.criarEndereco(),
            desconto: desconto,
            municipio: municipio,
            comoChegar: chegar,
        }
    }

    criarEndereco(): Endereco {
        return {
            cep: "56800-000",
            complemento: "Perto da loja chegaAqui",
            bairro: "Praça Monsenhor Alfredo de Arruda Câmara Centro",
            cidade: "Afogados da ingazeira",
            estado: "PERNAMBUCO",
            numero: "20",
            uf: "PE",
            comoChegar: "https://goo.gl/maps/KFfH2oxbnggMwZvh9"
        };
    }

    buscarLoja(nomeLoja: any): Loja {
        const busca = this.lojas.find(x => x.nome === nomeLoja as string);
        if (!busca) {
            throw new Error('Loja não encontrada.');
        } else {
            return busca;
        }

    }

}