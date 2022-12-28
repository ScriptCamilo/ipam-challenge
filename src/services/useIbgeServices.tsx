import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
  CitiesTypes, FederationUnityTypes
} from '@types';

const URL = ' https://servicodados.ibge.gov.br/api/v1/localidades';

export const ibgeApi = createApi({
  reducerPath: 'ibgeApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL}),
  endpoints: (builder) => ({
    getFederationUnities: builder.query<FederationUnityTypes[], void>({
      query: () => '/estados',
    }),

    getCitiesByUfId: builder.query<CitiesTypes[], string>({
      query: (id) => `estados/${id}/municipios`,
    })
  }),
});



export const {
  useGetFederationUnitiesQuery,
  useGetCitiesByUfIdQuery,
} = ibgeApi;
