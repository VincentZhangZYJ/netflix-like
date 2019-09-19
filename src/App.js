import React from 'react';
import { Provider } from 'react-redux';
import NetFlix from '../src/pages/netFlix/index';
import store from './configureStore';

function App() {
  return (
    <Provider store={store}>
      <NetFlix />
    </Provider>
  );
}

export default App;
