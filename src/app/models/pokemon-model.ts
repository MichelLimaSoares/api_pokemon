export interface Pokemon {
    
     codigo: string
     nome: string
     tipo: string
     altura: string
     peso: string
     status: {
       vida: number
       ataque: number
       defesa: number
       velocidade: number
     };
     descricao: string
  }


    