import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigator from './navigators/RootNavigator';
import { Processing } from './components/index';
import { initializeStore } from './redux/store';

const { store, persistor } = initializeStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {bootstrapped => {
          return (
            <>
              <RootNavigator bootstrapped={bootstrapped} />
              <Processing />
            </>
          );
        }}
      </PersistGate>
    </Provider>
  );
};

export default App;
