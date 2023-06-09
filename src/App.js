import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import BiscuitContainer from './components/BiscuitContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <UserContainer/>
{/*         <HooksCakeContainer/>
        <CakeContainer />
        <IceCreamContainer />
        <BiscuitContainer />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer /> */}
      </div>
    </Provider>

  );
}

export default App;
