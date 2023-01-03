import * as Toast from '@radix-ui/react-toast';
import { Provider } from 'react-redux';

import { store } from 'store';
import Home from './pages/home';

export default function App() {

  return (
    <Provider store={ store }>
      <Toast.Provider swipeDirection="right">
        <Home />
      </Toast.Provider>
    </Provider>
  );
}
