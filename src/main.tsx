import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '../src/store/basket/store';
import { AppRouter } from './router/AppRouter';
import './styles.css';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <Provider store={store}>
      <AppRouter/>
    </Provider>
    
  
  // </React.StrictMode>,
)
