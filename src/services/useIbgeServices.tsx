import { convertString } from 'utils';
import { apiClient } from './httpClient';

import type {
  CitiesTypes, FederationUnityTypes
} from '@types';

export async function getFederationUnitiesService() {
  const { data } = await apiClient.get<FederationUnityTypes[]>('/estados');
  const sortedData = data.sort((a, b) => {
    const convertedNameA = convertString(a.nome);
    const convertedNameB = convertString(b.nome);
    return convertedNameA > convertedNameB ? 1 : -1;
  });

  return sortedData;
}

export async function getCitiesService(federationUnityId: string) {
  const { data } = await apiClient.get<CitiesTypes[]>(`/estados/${federationUnityId}/municipios`);
  const sortedData = data.sort((a, b) => {
    const convertedNameA = convertString(a.nome);
    const convertedNameB = convertString(b.nome);
    return convertedNameA > convertedNameB ? 1 : -1;
  });

  return sortedData;
}

export async function getDistrictsService(cityId: string) {
  const { data } = await apiClient.get(`/municipios/${cityId}/distritos`);
  return data;
}
