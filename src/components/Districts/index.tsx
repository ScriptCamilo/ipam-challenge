import { useEffect, useState } from 'react';

import Toast from 'components/Toast';
import { useAppSelector } from 'hooks/useAppStore';
import { getValueById } from 'utils';

export default function Districts() {
  const {
    districts: { data, status, error },
    cities: { selectedId, data: cities },
  } = useAppSelector(store => store);
  const [district] = data;
  const selectedValue = getValueById(selectedId, cities);

  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState({
    title: '',
    description: '',
  });

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
    <div>
      <h1>Distritos</h1>

      <section>
        <h2>Microrregião</h2>
        <p>{district?.municipio?.microrregiao?.nome}</p>
      </section>

      <section>
        <h2>Mesorregião</h2>
        <p>{district?.municipio?.microrregiao?.mesorregiao?.nome}</p>
      </section>

      <section>
        <h2>UF</h2>
        <p>{district?.municipio?.microrregiao?.mesorregiao?.UF?.nome}</p>
      </section>

      <section>
        <h2>Região</h2>
        <p>{district?.municipio?.microrregiao?.mesorregiao?.UF?.regiao?.nome}</p>
      </section>

      <Toast
        title={toastMessage.title}
        description={toastMessage.description}
        open={toastOpen}
        setOpen={setToastOpen}
      >
        <button className="Button small green">Done</button>
      </Toast>
    </div>
  );
}
