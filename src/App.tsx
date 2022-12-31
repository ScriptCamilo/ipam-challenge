import { useEffect, useState } from 'react';

import Select from 'components/Select';
import Toast from 'components/Toast';
// import useFederationUnity from 'services/useFederationUnity';
// import { useGetFederationUnitiesQuery } from 'services/useIbgeServices';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppStore';
import { getFederationUnitiesThunk } from 'store/actions';
import './App.css';

export default function App() {
  // const { data, error, isLoading } = useGetFederationUnitiesQuery();
  const dispatch = useAppDispatch();
  // const [data, setData] = useState([]);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState({
    title: '',
    description: '',
  });

  const {
    error: { error },
    federationUnities: { data },
  } = useAppSelector((store) => store);


  useEffect(() => {
    if (error) {
      setToastMessage({
        title: 'Network fail',
        description: error,
      });
      setToastOpen(true);
    }
  }, [error]);

  useEffect(() => {
    dispatch(getFederationUnitiesThunk());
  }, []);

  return (
    <div className="App">
      <h1>Selecting</h1>
      <Select onChange={(value) => console.log(value)} data={data} placeholder="Estados"/>

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
