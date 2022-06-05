import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import SupportAdmin from './components/user-support/support-admin/SupportAdmin';



const path = window.location.pathname

ReactDOM.render(
<Provider store={store}>
   <BrowserRouter>
     <PersistGate persistor={persistor}>
     { path.indexOf('/support') === -1 ? <App /> : <SupportAdmin /> }
      </PersistGate>
   </BrowserRouter>
</Provider>,
document.getElementById('root')
);


