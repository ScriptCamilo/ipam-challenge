import { useEffect, useState } from 'react';

import Select from 'components/Select';
import Toast from 'components/Toast';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppStore';
import { changeCity, changeFederationUnity, fetchCities, fetchDistricts, fetchUFS, resetCity } from 'store/slices';
import { getValueById } from 'utils';

import Districts from 'components/Districts';
import { Form } from './styles';

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
    <Form>
      <h1>Selecting</h1>
      <Select onChange={handleChangeFederationUnity} data={ufs} placeholder="Estados"/>
      <Select key={cities.toString()} onChange={handleChangeCity} data={cities} placeholder="Cidades"/>

      <Districts />

      <Toast
        title={toastMessage.title}
        description={toastMessage.description}
        open={toastOpen}
        setOpen={setToastOpen}
      >
        <button className="Button small green">Done</button>
      </Toast>
    </Form>
  );
}
