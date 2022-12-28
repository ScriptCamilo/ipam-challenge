import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Select from 'components/Select';
import Toast from 'components/Toast';
// import useFederationUnity from 'services/useFederationUnity';
import { useGetFederationUnitiesQuery } from 'services/useIbgeServices';
import { changeFederationUnity } from 'store/slices';
import './App.css';

export default function App() {
  const { data, error, isLoading } = useGetFederationUnitiesQuery();
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState({
    title: '',
    description: '',
  });

  const store = useSelector((store) => store);


  useEffect(() => {
    if (error && 'status' in error) {
      setToastMessage({
        title: 'Network fail',
        description: `There was a status code ${error.status} error`,
      });
      setToastOpen(true);
    }
  }, [error]);

  return (
    <div className="App">
      <h1>Selecting</h1>
      <Select onChange={changeFederationUnity} data={data} placeholder="Estados"/>

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
