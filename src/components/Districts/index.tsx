import { useEffect, useState } from 'react';

import Loading from 'components/Loading';
import Separator from 'components/Separator';
import Toast from 'components/Toast';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppStore';
import { resetDistricts } from 'store/slices';
import { getValueById } from 'utils';

import { Container, Info, InfoWrapper } from './styles';

export default function Districts() {
  const dispatch = useAppDispatch();
  const {
    districts: { data, status, error },
    cities: { selectedId, data: cities },
  } = useAppSelector(store => store);
  const [district] = data;
  const selectedValue = getValueById(selectedId, cities);
  const isLoading = status === 'loading';

  const microrregiao = district?.municipio?.microrregiao;
  const mesorregiao = district?.municipio?.microrregiao?.mesorregiao;
  const federationUnity = district?.municipio?.microrregiao?.mesorregiao?.UF;
  const regiao = district?.municipio?.microrregiao?.mesorregiao?.UF?.regiao;

  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    dispatch(resetDistricts());
  }, [dispatch, selectedId]);

  useEffect(() => {
    if (status === 'failed') {
      setToastMessage({
        title: 'Network fail',
        description: `${error} ${selectedValue?.nome}`,
      });
      setToastOpen(true);
    }
  }, [selectedValue, status, error]);

  return (
    <Container data-loading={isLoading} key={data.toString()}>
      <h1>Distritos</h1>
      <Separator
        decorative
        orientation="horizontal"
      />
      <Info>
        <h2>Microrregião</h2>
        <InfoWrapper>
          {
            isLoading ? <Loading size="small" color="secondary" /> :
              <p>{microrregiao?.nome}</p>
          }
        </InfoWrapper>
      </Info>

      <Info>
        <h2>Mesorregião</h2>
        <InfoWrapper>
          {
            isLoading ? <Loading size="small" color="secondary" /> :
              <p>{mesorregiao?.nome}</p>
          }
        </InfoWrapper>
      </Info>

      <Info>
        <h2>UF</h2>
        <InfoWrapper>
          {
            isLoading ? <Loading size="small" color="secondary" /> :
              <p>{federationUnity?.nome} - {federationUnity?.sigla}</p>
          }
        </InfoWrapper>
      </Info>

      <Info>
        <h2>Região</h2>
        <InfoWrapper>
          {
            isLoading ? <Loading size="small" color="secondary" /> :
              <p>{regiao?.nome} - {regiao?.sigla}</p>
          }
        </InfoWrapper>
      </Info>

      <Toast
        title={toastMessage.title}
        description={toastMessage.description}
        open={toastOpen}
        setOpen={setToastOpen}
      >
        <button className="Button small green">Done</button>
      </Toast>
    </Container>
  );
}
