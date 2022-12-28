export interface DepedentService {
  isDependent?: boolean;
}

export interface FederationUnityTypes {
  id: number;
  sigla: string;
  nome: string;
  regiao: {
    id: number;
    sigla: string;
    nome: string;
  };
}

export interface CitiesTypes {
  id: number,
  nome: string,
  microrregiao: {
    id: number,
    nome: string,
    mesorregiao: {
      id: number,
      nome: string,
      UF: FederationUnityTypes
    }
  },

  'regiao-imediata': {
    id: number,
    nome: string,
    'regiao-intermediaria': {
      id: number,
      nome: string,
      UF: FederationUnityTypes
    }
  }
}
