import { apiClient } from './httpClient';

import type {
  CitiesTypes, FederationUnityTypes
} from '@types';

export async function getFederationUnitiesService() {
  const { data } = await apiClient.get<FederationUnityTypes>('/estados');

  return data;
}

export async function getCitiesService(federationUnityId: number) {
  const { data } = await apiClient.get<CitiesTypes>(`/estados/${federationUnityId}/municipios`);

  return data;
}
