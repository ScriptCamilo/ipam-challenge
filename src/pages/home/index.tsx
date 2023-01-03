import { useEffect, useState } from 'react';

import Districts from 'components/Districts';
import Select from 'components/Select';
import Toast from 'components/Toast';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppStore';
import { changeCity, changeFederationUnity, fetchCities, fetchDistricts, fetchUFS, resetCity } from 'store/slices';
import { getValueById } from 'utils';

import Separator from 'components/Separator';
import { Container, FormWrapper } from './styles';

export default function App() {
  const dispatch = useAppDispatch();
  const {
    federationUnities: {
      status: ufsStatus,
      data: ufs,
      error: ufsError,
      selectedId,
    },
    cities: {
      status: citiesStatus,
      data: cities,
      error: citiesError,
    }
  } = useAppSelector(store => store);

  const selectedValue = getValueById(selectedId, ufs);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState({
    title: '',
    description: '',
  });

  const handleChangeFederationUnity = (value: string) => {
    dispatch(changeFederationUnity(value));
    dispatch(fetchCities(value));
  };

  const handleChangeCity = (value: string) => {
    dispatch(changeCity(value));
    dispatch(fetchDistricts(value));
  };

  useEffect(() => {
    if (ufsStatus === 'idle') {
      dispatch(fetchUFS());
    }
  }, [dispatch, ufsStatus]);

  useEffect(() => {
    if (selectedId && cities.length) {
      dispatch(resetCity());
    }
  }, [dispatch, selectedId, cities]);

  useEffect(() => {
    if (ufsStatus === 'failed' && ufsError) {
      setToastMessage({
        title: 'Network fail',
        description: ufsError,
      });
      setToastOpen(true);
    }
    else if (citiesStatus === 'failed') {
      setToastMessage({
        title: 'Network fail',
        description: `${citiesError} ${selectedValue?.nome}`,
      });
      setToastOpen(true);
    }
  }, [selectedValue, citiesStatus, citiesError, ufsStatus, ufsError]);

  return (
    <Container>
      <FormWrapper>
        <h1>IBGE Services</h1>
        <Select
          isLoading={ufsStatus === 'loading'}
          onChange={handleChangeFederationUnity}
          data={ufs}
          placeholder="Estados"
        />

        <Select
          key={cities.toString()}
          isLoading={citiesStatus === 'loading'}
          onChange={handleChangeCity}
          data={cities}
          placeholder="Cidades"
        />
      </FormWrapper>

      <Separator orientation="vertical" decorative />

      <Districts />

      <Toast
        title={toastMessage.title}
        description={toastMessage.description}
        open={toastOpen}
        setOpen={setToastOpen}
      >
        <button className="">Done</button>
      </Toast>
    </Container>
  );
}
