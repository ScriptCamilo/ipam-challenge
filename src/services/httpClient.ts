import axios from 'axios';

const URL = ' https://servicodados.ibge.gov.br/api/v1/localidades';

export const apiClient = axios.create({
  baseURL: URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
